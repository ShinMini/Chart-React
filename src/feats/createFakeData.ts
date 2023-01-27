import z from 'zod'
import createRandomColor from './createRandomColor'
import faker from 'faker'
import { ChartData, ChartDataset } from 'chart.js'
import colorSet from '@colorSet'
import { ChartTypes } from '@/types/chart'

const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const sexLabels = ['남성', '여성', '알 수 없음']
const carLabels = ['HyunDai', 'Kia', 'Tesla', 'Benz', 'BMW', 'Audi']

const CreateFakeDataProps = z.object({
	labels: z.array(z.string()).optional(),
	createNum: z.number().min(1, { message: 'createNum must be greater than 1' }).optional(),
	randomColor: z.boolean().optional()
})

function createFakeData<T extends ChartTypes>({ labels = monthLabels, createNum = 3, randomColor = false }: z.infer<typeof CreateFakeDataProps>): ChartData<T> {

	const datasets = Array<ChartDataset>(createNum)
		.fill({
			label: '',
			data: [],
			backgroundColor: [],
			borderWidth: 0
		})
		.map((value, index) => {
			const maxNum = index === 2 ? 4000 : 12000
			const randomData = labels.map(() => faker.datatype.number({ min: 0, max: maxNum }))
			const randomColorSet = createRandomColor(labels.length)

			return {
				label: sexLabels.at(index),
				data: randomData,
				backgroundColor: (randomColor) ? randomColorSet?.at(index) : colorSet.above.at(index),
				borderWidth: index,
				fill: {
					target: 'origin',
					above: colorSet.above.at(index),   // Area will be red above the origin
					below: colorSet.below.at(index)// And blue below the origin
				}
			}
		}
		)

	return {
		labels,
		datasets
	}
}

export default createFakeData