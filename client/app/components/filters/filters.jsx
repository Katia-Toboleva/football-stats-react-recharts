import React, { useState, useEffect } from 'react';
import { Row, Column } from '../grid';
import Button from '../button';
import { getPlayersData, getTeamsData, getMatchesData } from '../../utilities/filters-utilities';
import styles from './filters.scss';

const Filters = ({
  teamData,
  playerData,
  matchData,
  statData,
  onClick,
}) => {
  const [teamId, setTeamId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [matchId, setMatchId] = useState('');

  const players = getPlayersData(teamId, matchId, statData, playerData);
  const teams = getTeamsData(playerId, matchId, statData, teamData);
  const matches = getMatchesData(teamId, playerId, statData, matchData);
  const isActive = (teamId && playerId && matchId);

  useEffect(() => {
    const results = localStorage.getItem('results');

    if (results) {
      const savedData = JSON.parse(results);
      setTeamId(savedData.team_id);
      setPlayerId(savedData.player_id);
      setMatchId(savedData.match_id);
    }
  }, []);

  const handleFilterChange = (value, filter) => {
    if (!value) {
      setTeamId('');
      setPlayerId('');
      setMatchId('');
    }
    
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
    if (isActive) {
      onClick({
        teamId,
        playerId,
        matchId,
      });
    }
  };

  return (
    <div className={styles['filters']}>
      <Row>
        <Column>
          <div className={styles['team-filter']}>
            <label htmlFor="team-filter">
              <select
                id="team-filter"
                name="team-filter"
                className={styles['team-select']}
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
          <div className={styles['player-filter']}>
            <label htmlFor="player-filter">
              <select
                id="player-filter"
                name="player-filter"
                className={styles['player-select']}
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
          <div className={styles['match-filter']}>
            <label htmlFor="match-filter">
              <select
                id="match-filter"
                name="match-filter"
                className={styles['match-select']}
                value={matchId}
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
          <Button
            isDisabled={!isActive}
            text="Search"
            type="submit"
            onClick={handleSearchButtonClick}
          />
        </Column>
      </Row>
    </div>
  );
};

export default Filters;
