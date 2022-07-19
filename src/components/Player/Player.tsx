import React, { memo, FC, useCallback } from "react";
import classnames from "classnames";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";

import { sendInvite } from "./../../api";

import { InviteButton } from "./../InviteButton";

import styles from "./Player.module.css";

export interface IPlayerProps {
  id: number;
  nickname: string;
  points: number;
  kills: number;
  deaths: number;
  isDead: boolean;
  isInvited: boolean;
  isSecondTeam?: boolean;
}

export const PlayerRaw: FC<IPlayerProps> = ({
  id,
  nickname,
  points,
  kills,
  deaths,
  isDead,
  isInvited,
  isSecondTeam = false,
}) => {
  const onClickInviteButton = useCallback(() => {
    return sendInvite(id);
  }, []);

  return (
    <Tippy
      followCursor={"horizontal"}
      plugins={[followCursor]}
      offset={[0, 5]}
      content={
        <div>
          <b>Kills/Deaths:</b> {kills}/{deaths}
        </div>
      }
    >
      <div
        className={classnames([
          styles.wrapper,
          {
            [styles.reverse]: isSecondTeam,
          },
        ])}
      >
        <div className={styles.nickname}>{nickname}</div>
        <div className={styles.points}>{points} points</div>
        <div
          className={classnames([
            styles.status,
            isDead ? styles.dead : styles.alive,
          ])}
        >
          {isDead ? "dead" : "alive"}
        </div>
        <InviteButton
          isInitialInvited={isInvited}
          onClick={onClickInviteButton}
        />
      </div>
    </Tippy>
  );
};

export const Player = memo(PlayerRaw);
