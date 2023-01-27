/* esAuthor {ShinMini}
 * @ChartType
 * */
import { Dispatch, SetStateAction } from 'react'
import { ChartData, ChartTypeRegistry } from 'chart.js'
import z from 'zod'

const UseChart = z.enum([
    'bar',
    'line',
    'doughnut',
    'radar',
])

export type ChartTypes = z.infer<typeof UseChart>
export type UsingChart = keyof Omit<ChartTypeRegistry, 'pie' | 'polarArea' | 'scatter' | 'bubble'>

/** ------------ Chart Screen Type --------------------------*/
export type ChartViewProps = { chartType: ChartTypes };

export type ChartState = {
    isSample: boolean
    data: ChartData<ChartTypes>
}

/** ------------ Chart Components Type ----------------------*/
export type ChartComponentProps = {
    chartType: ChartTypes;
    chartData: ChartData;
}

//** --------- Chart SideBar -------------*/
export type SideBarProps<T extends UsingChart> = {
    chartName: T;
    onClickChart: Dispatch<SetStateAction<T>>;
};
