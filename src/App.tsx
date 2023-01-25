import React, {createContext, useEffect, useRef, useState} from 'react'
import './styles/css/index.css'
import SideBar from "./components/SideBar";
import ChartView from './screens/ChartView';
import {ChartTypes} from "./types/chart.types";
import {createChartData, createRandomColor, createFakeData} from './feats';
import InputData from "./components/InputData";
import {chartOptions} from "./config/chartOption";
import {ChartData, ChartOptions} from "chart.js";
import InputOptions from "./components/InputOptions";
const fakeLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const initialValue = chartOptions
export const Options = createContext(initialValue)
const defaultData = createFakeData({labels: fakeLabels, randomColor: false})

function App() {
  const [displayChart, setDisplayChart] = useState<ChartTypes>(ChartTypes.BAR);
  const [chartData, setChartData] = useState<{isSample: boolean,data: ChartData}>({ isSample: true, data: defaultData});
  const [chartOptions, setChartOptions] = useState<ChartOptions>(initialValue);

  const buttonClick = (inputValue : string | undefined) => {
    if(inputValue === undefined) return
    const chartInfo = createChartData({chartData: inputValue, addData: {isTrue: !chartData.isSample , data: chartData.data.datasets} })

    setChartData({isSample: false, data: chartInfo})
  }

  return (
    <div className="App">
      <Options.Provider value={chartOptions}>
        <SideBar activeChart={displayChart} onClickChart={setDisplayChart}/>
        <InputData buttonClick={buttonClick} />
        <ChartView chartType={displayChart} chartData={chartData.data}/>
        <InputOptions setChartOptions={setChartOptions} setChartData={setChartData}/>
      </Options.Provider>
    </div>
  )
}

export default App
