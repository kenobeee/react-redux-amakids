import styled from "styled-components";

export const StartWrapper = styled.section`
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
export const StartWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 60%;
  height: 60%;
`
export const StartForm = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormLayer = styled.div`
  position: relative;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-top: 20px;
  
  &:first-child {
    margin-top: 0;
  }
`
export const FormLabel = styled.label`
  font-size: 3em;
`
export const FormInput = styled.input`
  background-color: inherit;
  
  border-bottom: 1px solid;
  
  margin-left: 30px;
  padding-bottom: 2px;

  width: 50px;
  
  text-align: center;
  font-size: 2em;
  
  &::placeholder {
    font-size: 1em;
    color: gray;
  }
`
export const FormDescription = styled.span`
  position: absolute;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);

  font-size: 1em;
  color: rgba(0, 0, 0, 0.7)
`
export const FormSubmit = styled.button`
  margin-top: 50px;
  padding: 15px 50px;
  
  width: fit-content;

  align-self: center;
  font-size: 1.4em;
  letter-spacing: .4px;
  text-transform: uppercase;

  background-color: inherit;
  
  border: 1px solid;
  
  cursor: pointer;
`