import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { MyContext } from "../context";

const Result = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.result();
    toast.success("There is your answer", {
      position: toast.POSITION.TOP_RIGHT,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>Your answer is:</h3>
      <div className="viewer">{context.state.result}</div>
      <div className="animate__animated animate__bounceIn animate__delay-1s">
        <hr />
        <button className="btn" onClick={context.reset}>
          Start over
        </button>
        <button className="btn" onClick={context.result}>
          Decide again
        </button>
      </div>
    </div>
  );
};

export default Result;
