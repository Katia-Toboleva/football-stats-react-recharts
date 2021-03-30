import React from 'react';
import Text from '../text';
import { Row, Column } from '../grid';
import styles from './details-container.scss';

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
    marginLeft: '5px',
  };

  return (
    <div className={styles['details-container']}>
      <Text size="medium" center>{player_name}</Text>
      <Row justifyContent="space-between">
        <Column>
          <div className={styles['details-container__item']}>
            <Text size="small">
              <b>Country: </b>
              {country_name}
            </Text>
            <Text size="small">
              <b>Date of birth: </b>
              {player_birth_date}
            </Text>
          </div>
        </Column>
        <Column>
          <div className={styles['details-container__item']}>
            <Text size="small">
              <b>Team: </b>
              {team_name}
            </Text>
            <Row>
              <Column>
                <Text size="small"><b>Colour: </b></Text>
              </Column>
              <Column>
                <div style={style} />
              </Column>
            </Row>
          </div>
        </Column>
        <Column>
          <div className={styles['details-container__item']}>
            <Text size="small">
              <b>Minutes played: </b>
              {searchResult.minutes_played}
            </Text>
            <Text size="small">
              <b>Goals: </b>
              {searchResult.goals}
            </Text>
          </div>
        </Column>
      </Row>

    </div>
  );
};

export default DetailsContainer;
