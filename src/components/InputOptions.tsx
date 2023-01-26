import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import {ChartOptions} from 'chart.js'
import {createFakeData} from '@/feats'
import { ChartState } from '@/types/chart'

const ShowSample = styled.input`
  width: 12vw;

  border-radius: 15px;

  font-size: 1.2em;
  margin-right: 4vw;

  border-width: 0;
  background-color: rgba(48,98,174, 0.7);
  color: white;
  
  transition-duration: 300ms;

  box-shadow: 5px 10px 15px -3px rgba(0,0,0,0.1); 
  
  transform: scale(1);
  &:hover {
    transform: scale(1.05);
    font-size: 1.3em;
  };
`

const InputBox = styled.input`
  width: 12vw;
  padding: 20px;
  
  margin-right: 4vw;

  border-width: 0;
  border-radius: 15px;

  background-color: rgba(120, 210, 140, 0.4);


  font-size: 2.0em;
  box-shadow: inset -8px 12px 4px -4px rgba(256,256,256,0.1);

  color: white;
`

const InputContainer = styled.div`
  margin-left: 15px;
  
  width: 90vw;
  
  display: flex;
`

const XAxisLabel = styled.div`
  position: absolute;
  
  background-color: rgba(83, 83, 83, 0.52);
  color: beige;

  border-radius: 5px;
  padding: 8px;

  top: 18.5vh;
  right: 18.2vw;

  font-size: 1.2em;
  text-align: center;
`


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
