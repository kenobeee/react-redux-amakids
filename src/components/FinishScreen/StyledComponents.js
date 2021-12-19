import styled from "styled-components";

export const FinishWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: .5s ease-out;
  will-change: transform;

  &[data-status=hidden] {
    margin-top: -100vh;
  }
`

export const FinishTitle = styled.div`
  font-size: 4em;
`

export const ReloadGame = styled.span`
  margin-top: 20px;
  
  cursor: pointer;
`