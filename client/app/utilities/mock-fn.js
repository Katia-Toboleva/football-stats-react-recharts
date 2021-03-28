import playerData from '../mocks/player-data.json';
import statData from '../mocks/stat-data.json';

export const fetchResults = (searchValue) => {
  const delay = Math.floor(Math.random() * 3000) + 1;
  const failureRandomNumber = Math.floor(Math.random() * 10) + 1;

  const searchedPlayer = playerData.find(({player_name}) => (
    player_name.toLocaleLowerCase()).startsWith(searchValue)
  );
  const searchedPlayerId = searchedPlayer.player_id;
  const filteredResultsByPlayer = statData.filter((item) => item.player_id === searchedPlayerId);

  return new Promise((resolve, reject) => {
    if (failureRandomNumber < 2) {
      reject();

      return;
    }

    window.setTimeout(() => {
      resolve(filteredResultsByPlayer);
    }, delay);
  });
};
