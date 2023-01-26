import React, {useContext} from 'react'
import {Bar,  Doughnut, Line,  Radar } from 'react-chartjs-2'
import {ChartComponentProps, ChartTypes} from '@/types/chart'
import {ChartData, ChartOptions } from 'chart.js'
import {Options} from '../App'

const Chart = ({chartType, chartData}: ChartComponentProps) => {
	const options = useContext(Options)

	switch (chartType) {
	case 'bar':
		return <Bar data={chartData as ChartData<'bar'>} options={options} />
	case 'line':
		return <Line data={chartData as ChartData<'line'>} options={options} />
	case 'radar':
		return <Radar data={chartData as ChartData<'radar'>} options={options as ChartOptions<'radar'>} />
	default:
		return <Doughnut data={chartData as ChartData<'doughnut'>} options={options} />
	}
}

export default Chart
