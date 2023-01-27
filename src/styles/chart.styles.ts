import styled from 'styled-components'

/** Chart View Style */
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

/** Chart Components Style */

// side bar
const SideBarContainer = styled.div`
  position: absolute;
  top: 14.2vh;
  right: 0;
  
  display: flex;
  
  width: 15%;
  height: 80vh;

  flex-direction: column;
`

const SideBarContent = styled.button`
  display: flex;
  font-size: 2em;

  margin-bottom: 15px;

  background-color: rgba(48,98,174, 0.4);

  border-width: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 5px 10px 15px -3px rgba(0,0,0,0.1);

  color: #fff;

  width: 100%;
  padding: 30px 0px 30px 10px;
  
  margin-top: 10px;

  font-weight: 500;
  margin-left: 10px;

  cursor: pointer;

  transition-duration: 300ms;
  transform: translate(2vw);
  
  &:hover {
    transform: translate(0px);
    font-size: 2.5em;
    font-weight: 700;

    background-color: rgba(48,98,174, 0.7);
    color: #000000;
  };
`
// Input Style

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

export { ChartHeader, ChartContainer, SideBarContent, SideBarContainer, InputBox, InputContainer, ShowSample, XAxisLabel, InputButton, InputChartData, InputChartLabel, InputDataContainer }

