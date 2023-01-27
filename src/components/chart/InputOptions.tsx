import React, {useRef, useState} from 'react'
import {ChartOptions} from 'chart.js'
import {createFakeData} from '@/feats'
import { ChartState } from '@/types/chart'
import { InputBox, InputContainer, ShowSample, XAxisLabel } from '@/styles/chart.styles'

type InputOptions = {
  setChartOptions: React.Dispatch<React.SetStateAction<ChartOptions>>
  setChartData: React.Dispatch<React.SetStateAction<ChartState>>
}

const InputOptions: React.FC<InputOptions> = ({setChartOptions, setChartData}) => {
	const inputTitle = useRef<HTMLInputElement>(null)
	const inputX = useRef<HTMLInputElement>(null)
	const inputY = useRef<HTMLInputElement>(null)
	const [xyLabels, setXYLabels] = useState({x: '월(month)', y: '지출액 (단위: 만원)'})

	const chartOptionSetting = (title: string | undefined, inputX = '', inputY = '') => {
		setChartOptions((prevState) => ({...prevState, plugins :{ title: {display: true, text: title, font: {size: 30}}}}))
		setXYLabels({x: inputX, y: inputY})
	}

	const showSample = () => {
		const defaultData = createFakeData({})
		setChartData({isSample: true, data: defaultData})
	}

	return (
		<>
			<InputContainer>
				<XAxisLabel> X: {xyLabels.x} Y: {xyLabels.y}</XAxisLabel>
				<ShowSample type="button" value={'Create' +'\n' +  'Sample Chart'} onClick={showSample}/>
				<InputBox ref={inputTitle} type="text" name="chart-option" placeholder={'차트 제목'} className="inputChartOption"/>
				<InputBox ref={inputX} type="text" name="chart-option" placeholder={'X 라벨'} className="inputChartOption"/>
				<InputBox ref={inputY} type="text" name="chart-option" placeholder={'Y 라벨'} className="inputChartOption"/>
				<ShowSample type="button" value="차트 리폼" style={{backgroundColor: 'rgba(191, 96, 103, 0.7)'}} onClick={() => chartOptionSetting(inputTitle.current?.value, inputX.current?.value, inputY.current?.value)}/>
			</InputContainer>
		</>
	)
}

export default InputOptions
