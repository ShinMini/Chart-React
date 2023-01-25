import React, {useState} from 'react';
import {ChartComponentProps, ChartTypes, ChartViewProps} from '../types/chart.types';
import Chart from "../components/Chart";
import { ChartHeader } from '../styles/Chart.styled';
import { ChartContainer } from '../styles/Chart.styled';
import InputOptions from "../components/InputOptions";

const ChartView = ({chartType, chartData}: ChartComponentProps) => {

  return (
    <ChartContainer>
      <ChartHeader>{chartType.toString().toUpperCase()} Chart</ChartHeader>
      <Chart chartType={chartType} chartData={chartData} />
    </ChartContainer>
  );
}

export default ChartView;
