/** @Author {ShinMini}
 * @ChartType
 * */
import { ChartData, ChartTypeRegistry } from 'chart.js'
import z from 'zod'

/** Chart Screen Type */
export type ChartViewProps = { chartType: ChartTypes };

export type UsingChart = keyof Omit<ChartTypeRegistry, 'pie' | 'polarArea' | 'scatter' | 'bubble'>


const UseChart = z.enum([
    'bar',
    'line',
    'doughnut',
    'radar',
])
export type ChartTypes = z.infer<typeof UseChart>

export type ChartState = {
    isSample: boolean
    data: ChartData<ChartTypes>
}

/** Bar Type - deprecated */
export type ChartComponentProps = {
    chartType: ChartTypes;
    chartData: ChartData;
}
