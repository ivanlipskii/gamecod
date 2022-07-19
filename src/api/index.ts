import { TEAMS } from "./../constants";
import { TTeams } from "./../types";

const mockFetch = <T>(value: T): Promise<T> =>
  new Promise((res) => setTimeout(() => res(value), 500));

export const loadTeams = (): Promise<TTeams> => {
  return mockFetch(TEAMS);
};

export const sendInvite = (id: number): Promise<boolean> => {
  return mockFetch(true);
};
