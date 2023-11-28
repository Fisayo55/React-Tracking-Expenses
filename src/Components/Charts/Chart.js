import "./Chart.css";
import ChartBars from "./ChartBars";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((datapoint) => datapoint.value);
  const dataPointValueMax = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBars
          key={datapoint.label}
          value={datapoint.value}
          maxValue={dataPointValueMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
