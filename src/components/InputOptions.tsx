import React, {useContext, useRef, useState} from 'react';
import styled from 'styled-components'
import {Options} from "../App";
import {ChartData, ChartOptions, plugins} from "chart.js";
import {createFakeData} from "../feats";

const ShowSample = styled.input`
  width: 100px;

  border-radius: 15px;

  font-size: 1.1em;

  background-color: #29a2d2;
  color: white;
`

const InputBox = styled.input`
  width: 250px;
  padding: 20px;

  border-radius: 15px;

  font-size: 2.0em;

  color: white;
`;

const InputContainer = styled.div`
  width: 90vw;
  margin-left: 2vw;
  
  display: flex;
  
  justify-content: space-around;
`

const XAxisLabel = styled.div`
  position: absolute;
  
  background-color: rgba(83, 83, 83, 0.72);
  color: beige;

  border-radius: 5px;
  padding: 8px;

  bottom: 12vw;
  left: 2.0vw;

  font-size: 1.2em;
  text-align: center;
`;


type InputOptions = {
  setChartOptions: React.Dispatch<React.SetStateAction<ChartOptions>>
  setChartData: React.Dispatch<React.SetStateAction<{isSample: boolean, data: ChartData}>>
}

const InputOptions: React.FC<InputOptions> = ({setChartOptions, setChartData}) => {
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputX = useRef<HTMLInputElement>(null);
  const inputY = useRef<HTMLInputElement>(null);
  const [xyLabels, setXYLabels] = useState({x: 'x라벨', y: 'y라벨'})
  const options = useContext(Options);

  const chartOptionSetting = (title: string | undefined, inputX = '', inputY = '') => {
    const _options = {...options}
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
        <XAxisLabel>{xyLabels.y} / {xyLabels.x}</XAxisLabel>
        <ShowSample type="button" value={"Sample" +'\n' +"Chart"} onClick={showSample}/>
        <InputBox ref={inputTitle} type="text" name="chart-option" placeholder={'차트 제목'} className="inputChartOption"/>
        <InputBox ref={inputX} type="text" name="chart-option" placeholder={'X 라벨'} className="inputChartOption"/>
        <InputBox ref={inputY} type="text" name="chart-option" placeholder={'Y 라벨'} className="inputChartOption"/>
        <InputBox type="button" value="차트 리폼" style={{backgroundColor: '#4abb08'}} onClick={() => chartOptionSetting(inputTitle.current?.value, inputX.current?.value, inputY.current?.value)}/>
      </InputContainer>
    </>
  )
}

export default InputOptions
