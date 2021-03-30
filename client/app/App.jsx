import React, { useState, useEffect } from 'react';
import ChartContainer from './components/chart-container';
import { fetchResults } from './utilities/mock-fn';
import teamData from './mocks/team-data.json';
import playerData from './mocks/player-data.json';
import matchData from './mocks/match-data.json';
import statData from './mocks/stat-data.json';
import Filters from './components/filters';

import './reset.scss';

const App = () => {
  const [fetchResultsRequestStatus, setRequest] = useState(null);
  const [searchResult, setSearchResult] = useState({});
  const [team, setTeamId] = useState('');
  const [player, setPlayerId] = useState('');
  const [match, setMatchId] = useState('');

  useEffect(() => {
    const results = localStorage.getItem('results');

    if (results) {
      const savedData = JSON.parse(results);
      setSearchResult(savedData);
      setTeamId(savedData.team_id);
      setPlayerId(savedData.player_id);
      setMatchId(savedData.match_id);
      setRequest('success');
    }
  }, []);

  const handleFetchResultsSuccess = (payload) => {
    localStorage.setItem('results', JSON.stringify(payload));
    setRequest('success');
    setSearchResult(payload);
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

  const handleSearchClick = ({ teamId, playerId, matchId }) => {
    fetchSearchResults({ teamId, playerId, matchId });
  };

  console.log(searchResult);

  return (
    <>
      <Filters
        team={team}
        player={player}
        match={match}
        playerValue={searchResult.player_id}
        matchValue={searchResult.match_id}
        teamData={teamData}
        playerData={playerData}
        matchData={matchData}
        statData={statData}
        onClick={handleSearchClick}
      />

      {fetchResultsRequestStatus === 'pending' && (
        <div>Loading...</div>
      )}

      {fetchResultsRequestStatus === 'rejected' && (
        <div>We cannot reach the server, please try again</div>
      )}

      {(fetchResultsRequestStatus === 'success') && (
        <ChartContainer
          searchResult={searchResult}
        />
      )}
    </>
  );
};

export default App;
