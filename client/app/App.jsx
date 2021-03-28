import React, { useState } from 'react';
import ChartContainer from './components/chart-container';
import SearchFilter from './components/search-filter';
import teamData from './mocks/team-data.json';
import { fetchResults } from './utilities/mock-fn';
import { debounce } from 'lodash';

import './reset.scss';

const results = teamData.map((item) => {
  const team = item.team_name.split(' ');
  const suggestion = teamData.find((name) => team.indexOf(name) !== -1);

  return {
    ...item,
    team,
    suggestion,
  };
});

const App = () => {
  const [fetchResultsRequestStatus, setRequest] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const handleFetchResultsSuccess = (payload) => {
    setRequest('success');
    setSearchResult(payload);
  };

  const handleFetchResultsRejected = () => {
    setRequest('rejected');
  };

  const fetchSearchResults = (searchValue) => {
    setRequest('pending');

    fetchResults(searchValue)
      .then(handleFetchResultsSuccess)
      .catch(handleFetchResultsRejected);
  };

  const handleSearchFilterChange = debounce((searchValue) => {
    fetchSearchResults(searchValue);
  }, 200);

  // const handleSearchFilterChange = (searchValue) => {
  //   fetchSearchResults(searchValue);
  // };

  return (
    <>
      <SearchFilter
        placeholder="player's name"
        fullWord={results[0].suggestion || ''}
        onChange={handleSearchFilterChange}
      />

      {fetchResultsRequestStatus === 'pending' && (
        <div>Loading...</div>
      )}

      {fetchResultsRequestStatus === 'rejected' && (
        <div>We cannot reach the server, please try again</div>
      )}

      {fetchResultsRequestStatus === 'success' && !!searchResult.length && (
        <ChartContainer searchResult={searchResult} />
      )}
    </>
  );
};

export default App;
