import { InputDataContainer, InputChartLabel, InputChartData, InputButton } from '@/styles/chart.styles'
import React, {useRef} from 'react'

type InputDataProps = {
  buttonClick: (inputData: string, inputLabel: string) => void
}

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
