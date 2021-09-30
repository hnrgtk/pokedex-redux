import ReactECharts from "echarts-for-react";

type BarChartProps = {
  data: Array<number>;
};

const BarChart = ({ data }: BarChartProps) => {
  const options = {
    xAxis: {
      type: "category",
      data: [
        "HP",
        "ATTACK",
        "DEFENSE",
        "S. ATTACK",
        "S. DEFENSE",
        "SPEED",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data,
        type: "bar",
        tooltip: {
          position: ["50%", "50%"],
        },
        label: {
          show: true,
        },
      },
    ],
  };
  return <ReactECharts option={options} />;
};

export default BarChart;
