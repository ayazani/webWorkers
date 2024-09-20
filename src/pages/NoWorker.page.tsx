import { useState, useEffect } from "react";
import styles from "./Pages.module.scss";
import Navigation from "./components/Navigation.component";

const NoWorkerPage = () => {
  const [bg, setBg] = useState<"purple" | "" | "yellow">("");
  const handleChangeBG = (e: any) => {
    e.preventDefault();
    if (bg) {
      bg === "yellow" ? setBg("purple") : setBg("yellow");
    } else setBg("yellow");
  };
  const handleMakeSuperArray = (e: any) => {
    e.preventDefault();
    const tr = true;
    while (tr) {
      let sum = 0;
      for (let i = 0; i < 10000; i++) {
        sum += i;
      }
      const array: Array<number> = new Array(sum);
      array.fill(sum / 1000, 0, sum);
      console.log(array);
    }
    alert("Super array is made");
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

export default NoWorkerPage;
