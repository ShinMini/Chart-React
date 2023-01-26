import React, {createContext, useState} from 'react'
import '@css'
import SideBar from '@/components/SideBar'
import ChartView from '@/screens/ChartView'
import {createChartData, createFakeData} from '@/feats/index'
import InputData from '@/components/InputData'
import {chartOptions} from '@/config/chartOption'
import { ChartOptions} from 'chart.js'
import InputOptions from '@/components/InputOptions'
import { ChartState, UsingChart } from '@/types/chart'

const initialValue = chartOptions
export const Options = createContext(initialValue)

function App() {
	const defaultData = createFakeData<typeof displayChart>({randomColor: false})
	const [displayChart, setDisplayChart] = useState<UsingChart>('bar')
	const [chartData, setChartData] = useState<ChartState>({ isSample: true, data: defaultData})
	const [chartOptions, setChartOptions] = useState<ChartOptions>(initialValue)

	function buttonClick(inputData : string, inputLabel: string) {
		const chartInfo = createChartData<typeof displayChart>({inputData, inputLabel, addData: {isTrue: !chartData.isSample , data: chartData.data.datasets} })

		setChartData({isSample: false, data: chartInfo})
	}

	return (
		<div className="App">
			<Options.Provider value={chartOptions}>
				<SideBar onClickChart={setDisplayChart}/>
				<InputData buttonClick={buttonClick} />
				<ChartView chartType={displayChart} chartData={chartData.data}/>
				<InputOptions setChartOptions={setChartOptions} setChartData={setChartData} />
			</Options.Provider>
		</div>
	)
}

export default App
