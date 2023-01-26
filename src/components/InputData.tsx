import React, {useRef} from 'react'
import styled from 'styled-components'

type InputDataProps = {
  buttonClick: (inputData: string, inputLabel: string) => void
}

const InputButton = styled.input`
  display: flex;
  
  width: 15%;
  height: 9vh;

  padding: 30px 0px 30px 10px;

  font-size: 2em;
  font-weight: 500;

  border-radius: 10px;
  border-color: transparent;
  
  background-color: rgba(191, 96, 103, 0.4);

  color: black;

  box-shadow: 23px 16px 14px -8px rgba(0,0,0,0.1);
  
  transform: translateX(2.0vw);
  transition-duration: 300ms;

  cursor: pointer;

  &:hover {
    transform: translateX(0px);
    font-size: 2.5em;
    font-weight: 700;
    
    background-color: rgba(191, 96, 103, 0.7);
    color: white;
  }
`

const InputChartData = styled.input`
  width: 64.8%;
  height: 80px;

  padding: 10px 20px;

  font-size: 1.5em;
  box-shadow: inset -14px 12px 3px -6px rgba(220,220,220, 0.2);
  
  border-radius: 15px;
  border-width: 0;
`

const InputChartLabel = styled.input`
  width: 12%;
  height: 80px;

  font-size: 1.5em;
  box-shadow: inset -14px 12px 3px -6px rgba(220,220,220, 0.2);
  
  margin-right: 30px;
  padding: 10px 20px;

  border-radius: 15px;
  border-width: 0;
`

const InputDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100vw;
  
  margin: 31.5px 15px;
`

const InputData: React.FC<InputDataProps> = ({buttonClick}) => {
	const inputDataRef = useRef<HTMLInputElement>(null)
	const inputLabelRef = useRef<HTMLInputElement>(null)

	const submitEvent = () => {
		const _inputLabel = inputLabelRef.current?.value
		const _inputData = inputDataRef.current?.value

		if(_inputData && _inputLabel) buttonClick(_inputData, _inputLabel)
	}

	return (
		<InputDataContainer>
			<InputChartLabel ref={inputLabelRef} type='text' placeholder={'데이터 라벨(제목)'} />
			<InputChartData ref={inputDataRef} type="text" name="chart-data" placeholder={'차트 데이터 붙여넣기'} />
			<InputButton type="button" value="차트 추가" onClick={submitEvent}/>
		</InputDataContainer>
	)
}

export default InputData
