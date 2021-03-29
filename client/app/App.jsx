import React, { useState } from 'react';
import ChartContainer from './components/chart-container';
import SearchFilter from './components/search-filter';
import teamData from './mocks/team-data.json';
import { fetchResults } from './utilities/mock-fn';
import { debounce } from 'lodash';
import Chart1 from './components/chart'

import './reset.scss';

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

  return (
    <>
      <SearchFilter
        placeholder="player's name"
        fullWord=""
        onChange={handleSearchFilterChange}
      />

      {fetchResultsRequestStatus === 'pending' && (
        <div>Loading...</div>
      )}

      {fetchResultsRequestStatus === 'rejected' && (
        <div>We cannot reach the server, please try again</div>
      )}

      {fetchResultsRequestStatus === 'success' && !!searchResult.length && (
        <ChartContainer
          searchResult={searchResult}
        />
      )}
    </>
  );
};

export default App;
