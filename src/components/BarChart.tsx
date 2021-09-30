import ReactECharts from "echarts-for-react";

const BarChart = ({ value }: any) => {
  console.log(value);

  const options = {
    xAxis: {
      type: "category",
      data: [
        "HP",
        "ATTACK",
        "DEFENSE",
        "SPECIAL ATTACK",
        "SPECIAL DEFENSE",
        "SPEED",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: value,
        type: "bar",
        tooltip: {
          position: ["50%", "50%"],
        },
        label: {
          show: true,
        },
      },
    ],
    // radar: {
    //   indicator: [
    //     { name: "HP", max: 250 },
    //     { name: "ATTACK", max: 134 },
    //     { name: "DEFENSE", max: 180 },
    //     { name: "SPECIAL ATTACK", max: 154 },
    //     { name: "SPECIAL DEFENSE", max: 100 },
    //     { name: "SPEED", max: 140 },
    //   ],
    // },
    // series: [
    //   {
    //     name: "Pokemon Stats",
    //     type: "radar",
    // 		symbol: 'circle',
    //     data: [
    //       {
    //         value,
    //         name: "Pokemon Stats",
    //       },
    //     ],
    // 		tooltip: {
    // 			position: ['50%', '50%']
    // 		},
    // 		label: {
    // 			show: true,
    // 		}
    //   },
    // ],
  };
  return (
    <ReactECharts
      option={options}
    />
  );
};

export default BarChart;
