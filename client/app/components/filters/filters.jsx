import React, { useState } from 'react';
import { Row, Column } from '../grid';
import teamData from '../../mocks/team-data.json';
import playerData from '../../mocks/player-data.json';
import matchData from '../../mocks/match-data.json';
import statData from '../../mocks/stat-data.json';

const getPlayersData = (teamId, matchId) => {
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

const getTeamsData = (playerId, matchId) => {
  if (playerId && !matchId) {
    const teamPerPlayerArr = statData.filter(item => item.player_id === playerId);

    if (!teamPerPlayerArr.length) {
      return [];
    }

    const teamPerPlayerId = teamPerPlayerArr[0].team_id;
    const teamPerPlayerData = teamData.find(item => item.team_id === teamPerPlayerId);
    console.log([teamPerPlayerData]);

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

const Filters = () => {
  const [teamId, setTeamId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [matchId, setMatchId] = useState('');

  const handleFilterChange = (value, filter) => {
    if (filter === 'team') {
      setTeamId(Number(value));
    }

    if (filter === 'player') {
      setPlayerId(Number(value));
    }

    if (filter === 'match') {
      setMatchId(Number(value));
    }
  };

  const players = getPlayersData(teamId, matchId);
  const teams = getTeamsData(playerId, matchId);

  return (
    <div className="filters">
      <Row>
        <Column>
          <div className="team-filter">
            <label htmlFor="team-filter">
              <select
                id="team-filter"
                name="team-filter"
                value={teamId}
                onChange={(event) => handleFilterChange(event.target.value, 'team')}
              >
                <option value="">Select</option>
                {teams.map((teamObj, index) => (
                  <option key={index} value={teamObj.team_id}>
                    {teamObj.team_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </Column>
        <Column>
          <div className="player-filter">
            <label htmlFor="player-filter">
              <select
                id="player-filter"
                name="player-filter"
                value={playerId}
                onChange={(event) => handleFilterChange(event.target.value, 'player')}
              >
                <option value="">Select</option>
                {players.map((playerObj, index) => (
                  <option key={index} value={playerObj.player_id}>
                    {playerObj.player_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </Column>
        <Column>
          <div className="match-filter">
            <label htmlFor="match-filter">
              <select
                id="match-filter"
                name="match-filter"
                value={matchId}
                onChange={(event) => handleFilterChange(event.target.value, 'match')}
              >
                <option value="">Select</option>
                {matchData.map((matchObj, index) => {
                  const homeTeamId = matchObj.match_home_team_id;
                  const homeTeam = teamData.find(item => item.team_id === homeTeamId).team_name;
                  const awayTeamId = matchObj.match_away_team_id;
                  const awayTeam = teamData.find(item => item.team_id === awayTeamId).team_name;

                  return (
                    <option key={index} value={matchObj.match_id}>
                      {`${homeTeam} - ${awayTeam}: ${matchObj.match_date}`}

                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default Filters;
