import React from "react";
import ReactApexChart from "react-apexcharts";

function ChartSection(props) {
  var state = {
    marketPrice: {
      series: [
        {
          name: "INR",
          data: props.marketChartData.prices,
        },
      ],
      options: {
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        title: {
          text: "Market Cap (INR)",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#038387",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          decimalsInFloat: 2,
        },
        colors: ["#038387"],
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <div id="chart" className="m-4" style={{padding:20}}>
        <div id="chart-timeline">
          <ReactApexChart
            options={state.marketPrice.options}
            series={state.marketPrice.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ChartSection;
