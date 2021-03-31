import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { fetchResults } from './utilities/mock-fn';
import teamData from './mocks/team-data.json';
import playerData from './mocks/player-data.json';
import matchData from './mocks/match-data.json';
import statData from './mocks/stat-data.json';
import ChartContainer from './components/chart-container';
import Filters from './components/filters';
import DetailsContainer from './components/details-container';
import Spinner from './components/spinner';
import Text from './components/text';

import styles from './reset.scss';

const App = () => {
  const [fetchResultsRequestStatus, setRequest] = useState(null);
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    const results = localStorage.getItem('results');

    if (results) {
      const savedData = JSON.parse(results);
      setSearchResult(savedData);
      setRequest('success');
    }
  }, []);

  const handleFetchResultsSuccess = (payload) => {
    localStorage.setItem('results', JSON.stringify(payload));
    setSearchResult(payload);
    setRequest('success');
  };

  const handleFetchResultsRejected = () => {
    setRequest('rejected');
  };

  const fetchSearchResults = (data) => {
    setRequest('pending');

    fetchResults(data)
      .then(handleFetchResultsSuccess)
      .catch(handleFetchResultsRejected);
  };

  const handleSearchClick = ({ playerId, matchId }) => {
    fetchSearchResults({ playerId, matchId });
  };

  return (
    <div className={styles['chart-app-container']}>
      <div className={styles['chart-app']}>
        <Filters
          playerValue={searchResult.player_id}
          matchValue={searchResult.match_id}
          teamData={teamData}
          playerData={playerData}
          matchData={matchData}
          statData={statData}
          onClick={handleSearchClick}
        />

        {(fetchResultsRequestStatus === null && isEmpty(searchResult)) && (
          <div className={styles['intro-container']}>
            <Text
              size="large"
              color="dark-blue"
              text="Welcome!"
              block
            />
            <Text
              size="medium"
              color="dark-blue"
              text="Please use the filters to search for the stats of football games."
              block
            />
          </div>
        )}

        {fetchResultsRequestStatus === 'pending' && (
          <Spinner />
        )}

        {fetchResultsRequestStatus === 'rejected' && (
          <Text
            size="medium"
            color="dark-blue"
            text="We cannot reach the server, please try again"
          />
        )}

        {(fetchResultsRequestStatus === 'success' && !isEmpty(searchResult)) && (
          <>
            <ChartContainer
              searchResult={searchResult}
              teamData={teamData}
            />
            <DetailsContainer
              searchResult={searchResult}
              playerData={playerData}
              teamData={teamData}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
