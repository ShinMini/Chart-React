import z from 'zod'

const labelType = z.number().min(1, { message: 'labels must be greater than 1' })

function createRandomColor(labels: z.infer<typeof labelType>) {
	const randomColorSet = new Array(labels).fill('#abf8cc').map(() => '#' + Math.floor(Math.random() * 16777215).toString(16))
	return randomColorSet
}

export default createRandomColor
