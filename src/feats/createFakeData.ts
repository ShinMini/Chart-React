import createRandomColor, {CreateRandomColorProps} from "./createRandomColor";
import faker from "faker";
import {ChartData, ChartDataset} from "chart.js";

const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const sexLabels = ['남성', '여성', '알 수 없음']
const carLabels = ['HyunDai', 'Kia', 'Tesla', 'Benz', 'BMW', 'Audi']

const randomLabels = [monthLabels, sexLabels, carLabels ]

const color1: CreateRandomColorProps = { labels: monthLabels, config: {isDefault: true, colorSet: 1} }
const color2: CreateRandomColorProps = { labels: monthLabels, config: {isDefault: true, colorSet: 2} }
const color3: CreateRandomColorProps = { labels: monthLabels }

const colorSet =  ["#70cbf4", 'rgba(203, 198, 240, 0.5)','#eae4e9', '#fff1e6', '#fde2e4', '#fad2e1', '#e2ece9', '#bee1e6', '#f0efeb', '#dfe7fd', '#cddafd ']


const defaultColorSet = [createRandomColor(color1), createRandomColor(color2)]
const defaultColorSet2 = createRandomColor(color2);

type createFakeDataProps = {
  labels?: Array<string>
  createNum?: number
  randomColor? : boolean
}

function createFakeData ({labels = monthLabels, createNum = 3, randomColor = false}: createFakeDataProps): ChartData {

  const datasets = Array<ChartDataset>(createNum)
    .fill({
      label: '',
      data: [],
      backgroundColor: [],
      borderWidth: 0
    })
    .map((value, index) => {
        const maxNum = index === 2 ? 300 : 1000
        const randomData = labels.map(() => faker.datatype.number({ min: 0, max: maxNum }))
        return {
          label : sexLabels.at(index),
          data : randomData,
          backgroundColor : (randomColor) ? defaultColorSet.at(index): colorSet.at(index),
          borderWidth : index
        }
      }
    )

  return {
    labels,
    datasets
  }
}

export default createFakeData

/** temp user data
 * : [
 *       {
 *         label: 'Sample data 1',
 *         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
 *         backgroundColor: defaultColorSet,
 *       },
 *       {
 *         label: 'Sample data 2',
 *         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
 *         backgroundColor: defaultColorSet2,
 *         borderWidth: 2,
 *         borderColor: '#111111',
 *       },
 *     ],
 *
 const spendMoney = UserData.spendMoney
 const users = UserData.users
 const randomColor = createRandomColor(users);

 const userData = {
  labels: spendMoney,
  datasets: [{
    data: users,
    backgroundColor: randomColor,
  }]
}
 */
