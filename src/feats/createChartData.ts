import { UsingChart } from '@/types/chart'
import { createRandomColor } from './index'
import { ChartData, ChartDataset, ChartType } from 'chart.js'
import colorSet from '../utils/colorSet'

export type CreateChartDataProps<T extends ChartType> = {
	inputData: string
	inputLabel: string
	addData: { isTrue: boolean, data: ChartDataset<T> }
}

function createChartData<T extends UsingChart>({ inputData, inputLabel, addData: { isTrue, data } }: CreateChartDataProps<T>): ChartData<T> {
	const searchParams = /\s*\]./g
	const _inputData = inputData?.split(searchParams)
	const _labels = (_inputData[0])?.split(',')
	const _extractData = (_inputData[1])?.split(',')

	const labels = _labels.map((item) => item.replace('[' || ']', ''))?.map((item) => Number(item.replace(']', '')).toString())
	const extractData = _extractData.map((item) => item.replace('[', ''))?.map((item) => Number(item.replace(']', '')))
	const ranNum = Number(Math.random() * 18)

	const randomColor = createRandomColor(labels.length)

	const _datasets = {
		label: inputLabel,
		data: extractData,
		backgroundColor: colorSet.default.at(ranNum),
		fill: {
			target: 'origin',
			above: colorSet.above.at(ranNum),
			below: colorSet.below.at(ranNum),
		}
	}

	const datasets = []
	datasets.push(_datasets)

	if (isTrue) {
		datasets.push(...data)
	}

	return {
		labels,
		datasets
	}
}

export default createChartData
