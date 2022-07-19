import { useEffect, useState, useCallback } from "react";

import { TTeams } from "./../types";
import { loadTeams } from "./../api";

export const useTeams = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teams, setTeams] = useState<TTeams>([]);

  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    const teams = await loadTeams();
    setTeams(teams);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return {
    isLoading,
    teams,
    fetchTeams,
  };
};
