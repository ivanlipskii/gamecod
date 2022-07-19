import React, { memo, FC } from "react";

import { TPlayers } from "./../../types";

import { Player } from "./../Player";

import styles from "./Team.module.css";

export interface ITeamProps {
  name: string;
  players: TPlayers;
  isSecondTeam?: boolean;
}

export const TeamRaw: FC<ITeamProps> = ({ name, players, isSecondTeam }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{name} team</div>
      <div className={styles.players}>
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              nickname={player.nickname}
              points={player.points}
              kills={player.kills}
              deaths={player.deaths}
              isDead={player.isDead}
              isInvited={player.isInvited}
              isSecondTeam={isSecondTeam}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Team = memo(TeamRaw);
