import React, {useContext} from 'react';
import {Bar,  Doughnut, Line,  Radar } from 'react-chartjs-2';
import {ChartComponentProps, ChartTypes} from "../types/chart.types";
import {ChartData, ChartOptions } from "chart.js";
import {Options} from "../App";

const Chart = ({chartType, chartData}: ChartComponentProps) => {
  const options = useContext(Options);

  switch (chartType) {
    case ChartTypes.BAR:
      return <Bar data={chartData as ChartData<ChartTypes.BAR>} options={options} />
    case ChartTypes.LINE:
      return <Line data={chartData as ChartData<ChartTypes.LINE>} options={options} />
    case ChartTypes.RADAR:
      return <Radar data={chartData as ChartData<ChartTypes.RADAR>} options={options as ChartOptions<ChartTypes.RADAR>} />
    default:
      return <Doughnut data={chartData as ChartData<ChartTypes.DOUGHNUT>} options={options} />
  }
}

export default Chart
