import { createContext, useState } from "react";

const list = [
  "Yes",
  "No",
  "Maybe",
  "Not sure..try again",
  "Ask a friend",
  "Call the police",
];

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [screen, setScreen] = useState(0);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const getRandomValue = () => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const handleResult = () => {
    let rand = getRandomValue();
    if (result !== "") while (rand === result) rand = getRandomValue();
    setResult(rand);
  };

  const reset = () => {
    setScreen(0);
    setQuestion("");
    setResult("");
  };

  return (
    <MyContext.Provider
      value={{
        state: { screen, question, result },
        goTo: setScreen,
        question: setQuestion,
        result: handleResult,
        reset,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};
