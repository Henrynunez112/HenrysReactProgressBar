import './App.css';
import ProgressBar from "../src/Component/ProgressBar/ProgressBar";
import CounterProgressBar from "../src/Component/ProgressBar/CounterProgressBar"

const testData = [
  { bgColor: "#6a1b9a", completed: 10 },
  { bgColor: "#00695c", completed: 50 },
  { bgColor: "#ef6c00", completed: 100 },

]

function App() {

  return (
    <div className="App">
      <h1>Progress Bar's</h1>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgColor={item.bgColor} completed={item.completed} />
      ))
      }
      <CounterProgressBar />
    </div>
  );
}

export default App;
