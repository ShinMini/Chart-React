import styled from "styled-components";

const SideBarContainer = styled.div`
  position: absolute;
  top: 172px;
  right: 0;
  
  display: flex;
  
  width: 15%;
  height: 60vh;

  
  flex-direction: column;
`;

const SideBarContent = styled.button`
  display: flex;
  font-size: 2em;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
  background-color: #e9ecef;
  border-bottom-width: 1.5px;
  border-bottom-color: gray;
`

export {SideBarContent, SideBarContainer}
