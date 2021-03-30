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
      <div className={styles['details-container__title']}>
        <Text
          size="medium"
          center
          weight="bold"
          text={player_name}
        />
      </div>
      <Row justifyContent="space-between">
        <Column>
          <div className={styles['details-container__item']}>
            <div>
              <Text
                size="small"
                weight="bold"
                text="Country: "
              />
              <Text
                size="small"
                text={country_name}
              />
            </div>
            <div>
              <Text
                size="small"
                weight="bold"
                text="Date of birth: "
              />
              <Text
                size="small"
                text={player_birth_date}
              />
            </div>
          </div>
        </Column>
        <Column>
          <div className={styles['details-container__item']}>
            <div>
              <Text
                size="small"
                weight="bold"
                text="Team: "
              />
              <Text
                size="small"
                text={team_name}
              />
            </div>
            <div>
              <Row>
                <Column>
                  <Text
                    size="small"
                    weight="bold"
                    text="Team colour: "
                  />
                </Column>
                <Column>
                  <div style={style} />
                </Column>
              </Row>
            </div>
          </div>
        </Column>

        <Column>
          <div className={styles['details-container__item']}>
            <div>
              <Text
                size="small"
                weight="bold"
                text="Minutes played: "
              />
              <Text
                size="small"
                text={searchResult.minutes_played}
              />
            </div>
            <div>
              <Text
                size="small"
                weight="bold"
                text="Goals: "
              />
              <Text
                size="small"
                text={searchResult.goals}
              />
            </div>
          </div>
        </Column>
      </Row>

    </div>
  );
};

export default DetailsContainer;
