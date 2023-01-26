import styled from 'styled-components'

const ChartHeader = styled.h1`
  font-size: 2em;
  color: #535bf2;
  
  padding-top: 10px;
  padding-left: 10px;
  margin: auto;
`

const ChartContainer = styled.div`
  width: 80vw;
  height: 65vh;
  
  margin-top: 30px;
  margin-bottom: 30px;
  
  padding: 20px 40px 50px 20px;
  margin-left: 15px;
  
  background-color: #e9ecef;
  border-radius: 15px;
  
  box-shadow: 12px 16px 15px -3px rgba(0,0,0,0.1); 
`

export {ChartHeader, ChartContainer}
