import React from 'react';
import Text from '../text';
import { Row, Column } from '../grid';

const DetailsContainer = ({ searchResult, playerData, teamData }) => {
  const playerId = searchResult.player_id;
  const playerObj = playerData.find(player => playerId === player.player_id);
  const { player_name, country_name, player_birth_date } = playerObj;
  const teamId = searchResult.team_id;
  const teamObj = teamData.find(team => teamId === team.team_id);
  const { team_name, team_first_color } = teamObj;

  const style = {
    backgroundColor: `${team_first_color}`,
    width: '40px',
    height: '15px',
  };

  return (
  <div>
    <Text size="medium">{player_name}</Text>
    <Row>
      <Column>
        <Text size="small">Country: {country_name}</Text>
        <Text size="small">Date of birth: {player_birth_date}</Text>
      </Column>
      <Column>
        <Text size="small">Team: {team_name}</Text>
        <Row>
          <Column>
            <Text size="small">Colour:</Text>
          </Column>
          <Column>
            <div style={style} />
          </Column>
        </Row>
      </Column>
      <Column>
        <Text size="small">Minutes played: {searchResult.minutes_played}</Text>
        <Text size="small">Goals: {searchResult.goals}</Text>
      </Column>
    </Row>

  </div>
)};

export default DetailsContainer;
