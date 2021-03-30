import statData from '../mocks/stat-data.json';

const getFilteredResults = ({ teamId, playerId, matchId }) => {
  const filteredResults = statData.find(item => item.team_id === teamId && item.player_id === playerId && item.match_id === matchId);

  return filteredResults;
};

export const fetchResults = (data) => {
  const delay = Math.floor(Math.random() * 3000) + 1;
  const failureRandomNumber = Math.floor(Math.random() * 10) + 1;

  const results = getFilteredResults(data);

  return new Promise((resolve, reject) => {
    if (failureRandomNumber < 2) {
      reject();

      return;
    }

    window.setTimeout(() => {
      resolve(results);
    }, delay);
  });
};
