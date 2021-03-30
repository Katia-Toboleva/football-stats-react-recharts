export const getPlayersData = (teamId, matchId, statData, playerData) => {
  if (teamId && !matchId) {
    const playerPerTeamArr = statData.filter(item => item.team_id === teamId);
    const playerPerTeamIds = playerPerTeamArr.map(item => item.player_id);
    const playersPerTeamData = playerPerTeamIds.map(id => playerData.find(item => item.player_id === id));

    return playersPerTeamData;
  }

  if (!teamId && matchId) {
    const playerPerMatchArr = statData.filter(item => item.match_id === matchId);
    const playerPerMatchIds = playerPerMatchArr.map(item => item.player_id);
    const playersPerMatchData = playerPerMatchIds.map(id => playerData.find(item => item.player_id === id));

    return playersPerMatchData;
  }

  if (teamId && matchId) {
    const playerPerTeamAndMatchArr = statData.filter(item => item.team_id === teamId && item.match_id === matchId);
    const playerPerTeamAndMatchIds = playerPerTeamAndMatchArr.map(item => item.player_id);
    const playersPerTeamAndMatchData = playerPerTeamAndMatchIds.map(id => playerData.find(item => item.player_id === id));

    return playersPerTeamAndMatchData;
  }

  return playerData;
};

export const getTeamsData = (playerId, matchId, statData, teamData) => {
  if (playerId && !matchId) {
    const teamPerPlayerArr = statData.filter(item => item.player_id === playerId);

    if (!teamPerPlayerArr.length) {
      return [];
    }

    const teamPerPlayerId = teamPerPlayerArr[0].team_id;
    const teamPerPlayerData = teamData.find(item => item.team_id === teamPerPlayerId);

    return [teamPerPlayerData];
  }

  if (!playerId && matchId) {
    const teamPerMatchArr = statData.filter(item => item.match_id === matchId);
    const teamPerMatchIds = teamPerMatchArr.map(item => item.team_id);
    const reducedTeamPerMatchIds = teamPerMatchIds.reduce((acc, currentValue) => (acc.includes(currentValue) ? acc : [...acc, currentValue]), []);
    const teamPerMatchArrData = reducedTeamPerMatchIds.map(id => teamData.find(item => item.team_id === id));

    return teamPerMatchArrData;
  }

  if (playerId && matchId) {
    const teamPerMatchAndPlayerArr = statData.filter(item => item.player_id === playerId && item.match_id === matchId);

    if (!teamPerMatchAndPlayerArr.length) {
      return [];
    }

    const teamPerMatchAndPlayerId = teamPerMatchAndPlayerArr[0].team_id;
    const teamPerMatchAndPlayerData = teamData.find(item => item.team_id === teamPerMatchAndPlayerId);;

    return [teamPerMatchAndPlayerData];
  }

  return teamData;
};

export const getMatchesData = (teamId, playerId, statData, matchData) => {
  if (playerId && !teamId) {
    const matchPerPlayerArr = statData.filter(item => item.player_id === playerId);

    if (!matchPerPlayerArr.length) {
      return [];
    }

    const matchPerPlayerIds = matchPerPlayerArr.map(item => item.match_id);
    const matchPerPlayerData = matchPerPlayerIds.map(id => matchData.find(item => item.match_id === id));

    return matchPerPlayerData;
  }

  if (!playerId && teamId) {
    const matchPerTeamArr = statData.filter(item => item.team_id === teamId);
    const matchPerTeamIds = matchPerTeamArr.map(item => item.match_id);
    const reducedMatchPerTeamArrData = matchPerTeamIds.reduce((acc, currentValue) => (acc.includes(currentValue) ? acc : [...acc, currentValue]), []);

    const matchPerTeamArrData = reducedMatchPerTeamArrData.map(id => matchData.find(item => item.match_id === id));

    return matchPerTeamArrData;
  }

  if (playerId && teamId) {
    const matchPerPlayerAndTeamArr = statData.filter(item => item.player_id === playerId && item.team_id === teamId);

    if (!matchPerPlayerAndTeamArr.length) {
      return [];
    }

    const matchPerPlayerAndTeamIds = matchPerPlayerAndTeamArr.map(item => item.match_id);
    const matchPerPlayerAndTeamData = matchPerPlayerAndTeamIds.map(id => matchData.find(item => item.match_id === id));

    return matchPerPlayerAndTeamData;
  }

  return matchData;
};
