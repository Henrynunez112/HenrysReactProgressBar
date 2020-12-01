import './App.css';
import ProgressBar from "../src/Component/ProgressBar/ProgressBar";
import CounterProgressBar from "../src/Component/ProgressBar/CounterProgressBar"
import FormAndProgressBar from './Component/ProgressBar/FormAndProgressBar';
import RandomBar from "./Component/ProgressBar/RandomBar"

const testData = [
  { bgColor: "#6a1b9a", completed: 10 },
  { bgColor: "#00695c", completed: 50 },
  { bgColor: "#ef6c00", completed: 100 }

]

function App() {

  return (
    <div className="App">
      <div className="appHeader">
        <h1>Progress Bar's</h1>
      </div>
      <div className="fixedBar">
        {testData.map((item, idx) => (
          <ProgressBar key={idx} bgColor={item.bgColor} completed={item.completed} />
        ))
        }
      </div>
      <div className="counterBar">
        <CounterProgressBar />
      </div>
      <div className="formBar">
        <FormAndProgressBar />
      </div>
      <div className="randomBar">
        <RandomBar />
      </div>
    </div>
  );
}

export default App;
