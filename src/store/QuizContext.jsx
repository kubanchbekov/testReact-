import { createContext, useState } from "react";
import { QUESTIONS } from "../data";

const initialState = {
  ball: 0,
  level: 0,
  updateBall: () => {},
  updateLevel: () => {},
};

export const QuizContext = createContext(initialState);

export const QuizProvider = ({ children }) => {
  const [ball, setBall] = useState(0);

  const [level, setLevel] = useState(0);

  const [showBall, setSheowBall] = useState(false);

  function updateBall(param) {
    console.log(param);

    if (param === true) {
      setBall((prevState) => prevState + 1);
    }
    if (level + 1 < QUESTIONS.length) {
      setLevel((prevState) => prevState + 1);
    } else {
      setSheowBall(true);
    }
  }
  const value = {
    ball: ball,
    level: level,
    updateBall,
    showBall,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
