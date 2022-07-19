import React from "react";
import styles from "./App.module.css";

import { useTeams } from "./hooks";

import { Teams } from "./components";

function App() {
  const { isLoading, teams } = useTeams();

  return (
    <div className={styles.wrapper}>
      {isLoading ? "Loading..." : <Teams teams={teams} />}
    </div>
  );
}

export default App;
