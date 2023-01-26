import styled from 'styled-components'

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

export { SideBarContent, SideBarContainer }
