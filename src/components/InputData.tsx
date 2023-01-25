import React, {useRef} from 'react';

type InputDataProps = {
  buttonClick: (inputValue: string | undefined) => void
}

const InputData: React.FC<InputDataProps> = ({buttonClick}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <input ref={inputRef} type="text" name="chart-data" placeholder={'차트 데이터 붙여넣기'} className="inputChartData"/>
      <input type="button" value="차트 추가" className="inputButton" onClick={() => buttonClick(inputRef.current?.value)}/>
    </form>
  )
}

export default InputData
