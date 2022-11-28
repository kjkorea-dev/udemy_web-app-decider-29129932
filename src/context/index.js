import { createContext, useState } from "react";

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [screen, setScreen] = useState(0);
  const [question, setQuestion] = useState("");

  return (
    <MyContext.Provider
      value={{
        state: { screen, question },
        goTo: setScreen,
        question: setQuestion,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};
