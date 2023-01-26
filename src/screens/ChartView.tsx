import React from 'react'
import {ChartComponentProps} from '@/types/chart'
import Chart from '@/components/Chart'
import { ChartHeader, ChartContainer } from '@/styles/Chart.styled'

const ChartView = ({chartType, chartData}: ChartComponentProps) => {

	return (
		<ChartContainer>
			<ChartHeader>{chartType.toString().toUpperCase()} Chart</ChartHeader>
			<Chart chartType={chartType} chartData={chartData} />
		</ChartContainer>
	)
}

export default ChartView
