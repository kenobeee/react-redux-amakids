import styled, {keyframes} from "styled-components";

const StepWayAnimation = keyframes`
  0% {
    opacity: 0;
  }
  55% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`

export const FieldWrapper = styled.section`
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
export const Field = styled.div`
  display: flex;
  flex-direction: column;

  ${(props => {
    if (props.size > 5) {
      return `
        row-gap: 5px;
      `
    } else {
      return `
        row-gap: 10px;
      `
    }
  })}
  
  &[data-state=blocked] {
    pointer-events: none;
    cursor: default;
  }
`

export const FieldRow = styled.div`
  display: flex;
  
  flex: 1 0 auto;

  ${(props => {
    if (props.size > 5) {
      return `
        column-gap: 5px;
      `
    } else {
      return `
        column-gap: 10px;
      `
    }
  })}
`

export const FieldCellWrapper = styled.div`

  flex: 1 0 auto;

  transition: .3s;
  will-change: transform;
  
  background-image: url(./media/cell.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props => {
    switch (props.size) {
      case 3:
        return `width: 110px;height: 110px;`
      case 4:
        return `width: 100px;height: 100px;`
      case 5:
        return `width: 90px;height: 90px;`
      case 6:
        return `width: 80px;height: 80px;`
      case 7:
        return `width: 70px;height: 70px;`
      case 8:
        return `width: 60px;height: 60px;`
      case 9:
        return `width: 50px;height: 50px;`
    }
  })}
`

export const FieldCell = styled.span`
  display: block;
  
  width: 100%;
  height: 100%;
  
  cursor: pointer;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  background-image: none;
  
  transition: .3s;

  &[data-status=start] {
    background-image: url(./media/steve.png);
  }

  &[data-status=finish] {
    opacity: 0;
    background-image: url(./media/sheep.png);
    
    &:focus {
      opacity: 1
    }
  }

  &[data-status=neutral] {
    opacity: 0;
    background-image: url(./media/crepeer.png);
    
    &:focus {
      opacity: 1;
    }
  }

  &[data-finish=false] {
    opacity: 0;
    background-image: url(./media/sheep.png);
  }

  &[data-finish=true] {
    opacity: 1;
  }

  &[data-status^=start-finish] {
    opacity: 1;
    background-image: url(./media/steve.png);
    
    &:focus {
      background-image: url(./media/sheep.png);
    }
  }
`

export const WaySymbol = styled.span`
  position: relative;

  width: 70px;
  height: 70px;

  margin-top: 50px;
  
  &::after {
    content: 'старт';
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    font-size: 3em;

    cursor: pointer;
    transition: .5s;
  }

  &::before {
    content: 'выберите поле';

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-size: 3em;

    pointer-events: none;
    cursor: default;
    
    opacity: 0;
    
    transition: .5s;
  }

  &[data-animation=true] {
    width: 70px;
    height: 70px;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    animation: ${StepWayAnimation} 3s linear alternate infinite;
    
    will-change: transform;
    transition: transform .5s;

    pointer-events: none;
    cursor: default;

    &::after {
      opacity: 0;
    }
  }

  &[data-arrow=end] {
    &::before {
      opacity: 1;
    }
  }

  &[data-arrow=up] {
    transform: rotate(90deg);
    background-image: url(./media/arrow.png);
  }

  &[data-arrow=down] {
    transform: rotate(-90deg);
    background-image: url(./media/arrow.png);
  }

  &[data-arrow=left] {
    background-image: url(./media/arrow.png);
  }

  &[data-arrow=right] {
    transform: rotate(180deg);
    background-image: url(./media/arrow.png);
  }
`