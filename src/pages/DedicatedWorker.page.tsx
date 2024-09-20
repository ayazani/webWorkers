import { useState, useEffect } from "react";
import styles from "./Pages.module.scss";
import Navigation from "./components/Navigation.component";

const DedicatedWorkerPage = () => {
  const [bg, setBg] = useState<"purple" | "" | "yellow">("");
  const handleChangeBG = (e: any) => {
    e.preventDefault();
    if (bg) {
      bg === "yellow" ? setBg("purple") : setBg("yellow");
    } else setBg("yellow");
  };
  const handleMakeSuperArray = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.body.style.backgroundColor = bg;
  }, [bg]);

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <button onClick={handleChangeBG}>Change BG</button>
        <button onClick={handleMakeSuperArray}>Make super array</button>
      </div>
    </>
  );
};

export default DedicatedWorkerPage;
