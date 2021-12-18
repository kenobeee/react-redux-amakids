import styled from "styled-components";

export const FieldWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
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