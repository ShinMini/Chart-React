import React, { createContext, useState } from 'react'
import { ChartOptions} from 'chart.js'
import { ChartHeader, ChartContainer } from '@/styles/chart.styles'
import {chartOptions} from '@/config/chartOption'

import { ChartState, UsingChart } from '@/types/chart'
import {createChartData, createFakeData} from '@/feats'

import { Chart, SideBar, InputData, InputOptions } from '@compo/chart'

const initialValue = chartOptions
export const Options = createContext(initialValue)


const ChartView: React.FC = () => {
	const defaultData = createFakeData<typeof displayChart>({randomColor: false})
	const [displayChart, setDisplayChart] = useState<UsingChart>('bar')
	const [chartData, setChartData] = useState<ChartState>({ isSample: true, data: defaultData})
	const [chartOptions, setChartOptions] = useState<ChartOptions>(initialValue)

	function buttonClick(inputData : string, inputLabel: string) {
		const chartInfo = createChartData<typeof displayChart>({inputData, inputLabel, addData: {isTrue: !chartData.isSample , data: chartData.data.datasets} })

		setChartData({isSample: false, data: chartInfo})
	}
	return (

		<Options.Provider value={chartOptions}>
			<SideBar onClickChart={setDisplayChart}/>
			<InputData buttonClick={buttonClick} />
			<ChartContainer>
				<ChartHeader>{displayChart.toString().toUpperCase()} Chart</ChartHeader>
				<Chart chartType={displayChart} chartData={chartData.data} />
			</ChartContainer>
			<InputOptions setChartOptions={setChartOptions} setChartData={setChartData} />
		</Options.Provider>
	)
}

export default ChartView
