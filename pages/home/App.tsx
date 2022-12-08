import React, { useState, useRef, useEffect } from "react";
import styles from "./home.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [turn, setTurn] = useState(true);
  const [finished, setFinished] = useState(false);

  // shitty code ^-^
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  // value in each box => shitty code I know there is a better way to do this but I have no idea why I am doing it this way
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");

  const values: any = {
    "1": [value1, setValue1],
    "2": [value2, setValue2],
    "3": [value3, setValue3],
    "4": [value4, setValue4],
    "5": [value5, setValue5],
    "6": [value6, setValue6],
    "7": [value7, setValue7],
    "8": [value8, setValue8],
    "9": [value9, setValue9],
  };

  const checkWinner = () => {
    const XO = [
      [value1, value2, value3],
      [value4, value5, value6],
      [value7, value8, value9],
    ];
    if (XO[0][0] === XO[0][1] && XO[0][1] === XO[0][2]) return XO[0][0];
    if (XO[0][0] === XO[1][0] && XO[0][0] === XO[2][0]) return XO[0][0];
    if (XO[0][0] === XO[1][1] && XO[0][0] === XO[2][2]) return XO[0][0];
    if (XO[0][1] === XO[1][1] && XO[0][1] === XO[2][1]) return XO[0][1];
    if (XO[2][0] === XO[2][1] && XO[2][0] === XO[2][2]) return XO[2][0];
    if (XO[0][2] === XO[1][2] && XO[0][2] === XO[2][2]) return XO[0][2];
    if (XO[2][0] === XO[1][1] && XO[2][0] === XO[0][2]) return XO[2][0];
    if (XO[1][2] === XO[1][1] && XO[1][2] === XO[1][0]) return XO[1][2];
    if (XO[2][0] === XO[2][1] && XO[2][0] === XO[2][2]) return XO[2][0];
  };

  const changeTurn = async (id: string) => {
    if (!finished && values[id][0] !== "X" && values[id][0] !== "O") {
      values[id][1](turn ? "X" : "O");

      setTurn(!!!turn);
    }
  };

  useEffect(() => {
    if (checkWinner()) {
      toast(`${checkWinner()} is the winner!`);
      setFinished(true);
    }
  });

  return (
    <>
      <center>
        <h1> Turn: {turn ? "X" : "O"}</h1>
        <ToastContainer />
      </center>

      <div className={styles.homeContainer}>
        <div className={styles.row} onClick={() => changeTurn("1")}>
          <div className={styles.box}>
            <center>
              <h1 id="1" className={styles.text} ref={ref1}>
                {values["1"][0]}
              </h1>
            </center>
          </div>
          <div className={styles.box} onClick={() => changeTurn("2")}>
            <center>
              <h1 id="2" className={styles.text} ref={ref2}>
                {values["2"][0]}
              </h1>
            </center>
          </div>
          <div className={styles.box} onClick={() => changeTurn("3")}>
            <center>
              <h1 id="3" className={styles.text} ref={ref3}>
                {values["3"][0]}
              </h1>
            </center>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.box} onClick={() => changeTurn("4")}>
            <center>
              <h1 id="4" className={styles.text} ref={ref4}>
                {values["4"][0]}
              </h1>
            </center>
          </div>
          <div className={styles.box} onClick={() => changeTurn("5")}>
            <center>
              <h1 id="5" className={styles.text} ref={ref5}>
                {values["5"][0]}
              </h1>
            </center>
          </div>
          <div className={styles.box} onClick={() => changeTurn("6")}>
            <center>
              <h1 id="6" className={styles.text} ref={ref6}>
                {values["6"][0]}
              </h1>
            </center>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.box} onClick={() => changeTurn("7")}>
            <center>
              <h1 id="7" className={styles.text} ref={ref7}>
                {values["7"][0]}
              </h1>
            </center>
          </div>
          <div className={styles.box} onClick={() => changeTurn("8")}>
            <center>
              <h1 id="8" className={styles.text} ref={ref8}>
                {values["8"][0]}
              </h1>
            </center>
          </div>
          <div className={styles.box} onClick={() => changeTurn("9")}>
            <center>
              <h1 id="9" className={styles.text} ref={ref9}>
                {values["9"][0]}
              </h1>
            </center>
          </div>
        </div>
      </div>
      <>
        <center>
          {finished ? (
            <h2
              onClick={() => {
                for (let i: number = 0; i < 9; i++) {
                  setValue1("");
                  setValue2("");
                  setValue3("");
                  setValue4("");
                  setValue5("");
                  setValue6("");
                  setValue7("");
                  setValue8("");
                  setValue9("");
                }
              }}
            >
              replay
            </h2>
          ) : undefined}
        </center>
      </>
    </>
  );
};

export default App;
