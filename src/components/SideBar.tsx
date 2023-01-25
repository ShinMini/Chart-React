import React, {useState} from 'react';

import {SideBarProps} from '../types/header.types';
import {ChartTypes} from "../types/chart.types";

import '../styles/css/SideBar.styles.css';
import {SideBarContainer, SideBarContent} from '../styles/SideBar.styled';

const SideBarComponents: React.FC<SideBarProps<ChartTypes>> = ({activeChart, onClickChart}) => {
  const onClick = () => onClickChart(activeChart)

  return <SideBarContent onClick={onClick}> {activeChart.toUpperCase()} </SideBarContent>
}

const SideBar: React.FC<SideBarProps<ChartTypes>> = ({activeChart, onClickChart}) => {
  return (
    <SideBarContainer>
      <SideBarComponents activeChart={ChartTypes.BAR} onClickChart={onClickChart} />
      <SideBarComponents activeChart={ChartTypes.LINE} onClickChart={onClickChart} />
      <SideBarComponents activeChart={ChartTypes.DOUGHNUT} onClickChart={onClickChart} />
      <SideBarComponents activeChart={ChartTypes.RADAR} onClickChart={onClickChart} />
    </SideBarContainer>
  );
}



export default SideBar;
