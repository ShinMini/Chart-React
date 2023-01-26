import {ChartOptions} from 'chart.js'

export const chartOptions: ChartOptions = {
	responsive: true,
	hover: {
		axis: 'y',
	},
	elements: {
		bar: {
			borderRadius: 5,
		},
	},
	plugins: {
		legend: {
			position: 'top' as const,
			labels: {
				padding: 10,
				font: {
					family: 'Pretendard',
					size: 18,
				},
			}
		},
		title: {
			display: true,
			text: '모두페이 매출지표',
			font: {
				family: 'Pretendard',
				size: 30,
			},
			padding: 15,
		},
	},
}
