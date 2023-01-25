/** @Author {ShinMini}
 * @ChartType
 * */
import {ChartData, ChartTypeRegistry} from 'chart.js';


/** Chart Screen Type */
export type ChartViewProps = { chartType: ChartTypes};

export type SelectChart = Omit<ChartTypeRegistry, 'pie' | 'polarArea' | 'scatter' | 'bubble'>

type GetChartType<T extends keyof SelectChart> = keyof Pick<SelectChart, T>

export const enum ChartTypes {
    BAR = 'bar',
    LINE = 'line',
    DOUGHNUT = 'doughnut',
    RADAR = 'radar',
}

/** Bar Type - deprecated */
export type ChartComponentProps = {
    chartType: ChartTypes;
    chartData: ChartData;
}

