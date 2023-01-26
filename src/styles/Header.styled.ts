import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  
  width: 100vw;
  height: 18vh;
  
  flex-direction: row;
`

const HeaderContent = styled.button`
  display: flex;
  font-size: 2em;

  border-radius: 15px;
  background-color: #e9ecef;
  
  border-bottom-width: 1.5px;
  border-bottom-color: gray;
`

export {HeaderContainer, HeaderContent}
