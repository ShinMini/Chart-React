import { Dispatch, SetStateAction } from 'react'
import { ChartType } from 'chart.js'

export type SideBarProps<T extends ChartType> = {
    chartName: T;
    onClickChart: Dispatch<SetStateAction<T>>;
};
