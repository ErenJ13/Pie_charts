import './App.css';
import { Chart } from "react-google-charts";


const data = [
  ["Artist", "Views (billions)"],
  ["BTS", 25],
  ["Blackpink", 14],
  ["Twice", 9],
  ["PSY", 7],
  ["BIGBANG", 4],
];

const options = {
  title: "Most watched k-pop artists",
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}



export default App;
