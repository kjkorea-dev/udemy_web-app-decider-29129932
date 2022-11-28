import { useContext } from "react";
import { MyContext } from "../context";

const Confirm = () => {
  const context = useContext(MyContext);
  return <div>My Question is {context.state.question}</div>;
};

export default Confirm;
