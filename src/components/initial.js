import { useContext, useRef, useState } from "react";
import { MyContext } from "../context";

const Initial = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [showNext, setShowNext] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleChange = () => {
    setShowNext(textInput.current.value.length >= 5);
  };
  const handleSubmit = () => {
    const value = textInput.current.value;

    if (value.length >= 30) {
      setShowError(true);
      return false;
    }

    context.goTo(1);
    context.question(value);
  };
  return (
    <div>
      <h1>Ask a question</h1>
      <input
        ref={textInput}
        onChange={handleChange}
        type="text"
        name="question"
        className="form-control"
      />
      {showNext && (
        <button
          className="btn animate__animated animate__fadeIn"
          onClick={handleSubmit}>
          Next
        </button>
      )}
      {showError && <div className="error">The question is long</div>}
    </div>
  );
};

export default Initial;
