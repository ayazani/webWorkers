import { useMatches, useNavigate } from "react-router-dom";

import styles from './Navigation.module.scss'

const Navigation = () => {
  const matches = useMatches();
  const navigate = useNavigate();

  const handleGetMatch = (value: string): boolean => {
    return Boolean(matches.filter((match) => match.pathname === value).length);
  };

  const handleGetIsHome = (): boolean => {
    return Boolean(matches.filter((match) => match.pathname === '/').length > 1);
  }

  return (
    <div className={styles.container}>
      <button
        disabled={handleGetIsHome()}
        onClick={() => navigate("/")}
      >
        to no workers
      </button>
      <button
        disabled={handleGetMatch("/dedicatedWorker")}
        onClick={() => navigate("/dedicatedWorker")}
      >
        to dedicated worker
      </button>
      <button
        disabled={handleGetMatch("/sharedWorker")}
        onClick={() => navigate("/sharedWorker")}
      >
        to shared worker
      </button>
    </div>
  );
};

export default Navigation;
