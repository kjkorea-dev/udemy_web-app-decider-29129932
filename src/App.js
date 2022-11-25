import "./assets/App.css";
import Initial from "./components/initial";
import Confirm from "./components/confirm";
import Result from "./components/result";

const handleComponent = () => {
  const screen = 0;

  if (screen === 0) return <Initial />;
  if (screen === 1) return <Confirm />;
  if (screen === 2) return <Result />;
};

const App = () => {
  return <div className="container">{handleComponent()}</div>;
};

export default App;
