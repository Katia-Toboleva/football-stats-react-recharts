import React, { useState } from 'react';
import { Row, Column } from '../grid';
import { getPlayersData, getTeamsData, getMatchesData } from '../../utilities/filters-utilities';

const Filters = ({
  team,
  player,
  match,
  teamData,
  playerData,
  matchData,
  statData,
  onClick,
}) => {
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

  const handleSearchButtonClick = () => {
    onClick({
      teamId,
      playerId,
      matchId,
    });
  };

  const players = getPlayersData(teamId, matchId, statData, playerData);
  const teams = getTeamsData(playerId, matchId, statData, teamData);
  const matches = getMatchesData(teamId, playerId, statData, matchData);

  return (
    <div className="filters">
      <Row>
        <Column>
          <div className="team-filter">
            <label htmlFor="team-filter">
              <select
                id="team-filter"
                name="team-filter"
                value={teamId || team}
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
                value={playerId || player}
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
                value={matchId || match}
                onChange={(event) => handleFilterChange(event.target.value, 'match')}
              >
                <option value="">Select</option>
                {!!matches.length && matches.map((matchObj, index) => {
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
        <Column>
          <button
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </Column>
      </Row>
    </div>
  );
};

export default Filters;
