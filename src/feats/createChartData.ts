import {createRandomColor} from "./index";
import {ChartData, ChartDataset, ChartType} from "chart.js";

export type CreateChartDataProps = {
  chartData: string
  addData: {isTrue: boolean, data: ChartDataset}

}

function createChartData({chartData, addData: {isTrue, data}} : CreateChartDataProps): ChartData {
  const searchParams = /\s*\]./g;
  const _chartData = chartData?.split(searchParams);
  const _labels = (_chartData[0])?.split(',')
  const _extractData = (_chartData[1])?.split(',')

  const labels = _labels.map((item) => item.replace('[' || ']', ''))?.map((item) => Number(item.replace(']', '')).toString())
  const extractData = _extractData.map((item) => item.replace('[', ''))?.map((item) => Number(item.replace(']', '')))

  const randomColor = createRandomColor({labels, config: {isDefault: true, colorSet: 1}})


  const _datasets = {
    label: 'user data analysis',
    data: extractData,
    backgroundColor: randomColor,
  }

  let datasets = []
  datasets.push(_datasets)


  if(isTrue) {
    // @ts-ignore
    datasets.push(...data)
  }


  return {
    labels,
    datasets
  }
}

export default createChartData
