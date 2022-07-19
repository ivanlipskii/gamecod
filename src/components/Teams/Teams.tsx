import React, { memo, FC } from "react";

import { TTeams } from "./../../types";

import { Team } from "./../Team";

import styles from "./Teams.module.css";

export interface ITeamsProps {
  teams: TTeams;
}

export const TeamsRaw: FC<ITeamsProps> = ({ teams }) => {
  const [firstTeam, secondTeam] = teams;
  return (
    <div className={styles.wrapper}>
      <Team
        key={firstTeam.id}
        name={firstTeam.name}
        players={firstTeam.players}
      />
      <div className={styles.separator} />
      <Team
        key={secondTeam.id}
        name={secondTeam.name}
        players={secondTeam.players}
        isSecondTeam
      />
    </div>
  );
};

export const Teams = memo(TeamsRaw);
