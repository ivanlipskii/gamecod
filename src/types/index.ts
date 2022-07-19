export interface IPlayer {
  id: number;
  nickname: string;
  points: number;
  isDead: boolean;
  kills: number;
  deaths: number;
  isInvited: boolean;
}

export type TPlayers = IPlayer[];

export interface ITeam {
  id: number;
  name: string;
  players: TPlayers;
}

export type TTeams = ITeam[];
