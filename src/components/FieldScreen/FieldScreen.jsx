import {
  FieldWrapper,
  Field,
  FieldRow,
  FieldCellWrapper,
  FieldCell,
  WaySymbol
} from './StyledComponents';
import {useState} from "react";

export default function FieldScreen({changeScreen, screenStatus, matrix, steps, updateResultOfGame}) {

  const [wayState, setWayState] = useState(false);
  const [finishCellState, setFinishCellState] =  useState(false);
  const [fieldState, setFieldState] = useState('blocked');

  const startHandler = () => {
    const doChangingWaySteps = async (item, index) => {
      setTimeout(() => {
        setWayState(item);
        if (item === 'end') setFieldState('active');
      }, 3000 * index);
    }
    steps.push('end');
    steps.map(doChangingWaySteps);
  }

  const checkStatusCell = event => {
    const status = event.target.getAttribute('data-status');
    if (status === 'finish' || status === 'start-finish') {
      setFieldState('blocked');
      updateResultOfGame('win');
      setTimeout(() => {
        changeScreen('secondScreen', 'thirdScreen');
      }, 2000);
    } else {
      setFinishCellState(true);
      setFieldState('blocked');
      updateResultOfGame('lose');
      setTimeout(() => {
        changeScreen('secondScreen', 'thirdScreen');
      }, 2000);
    }
  }

  return (
    <FieldWrapper data-status={screenStatus}>
      <Field size={matrix.length} data-state={fieldState}>
        {matrix &&
          matrix.map( (row, index) => (
            <FieldRow
              key={index}
              data-row={++index}
              size={matrix.length
            }>
              {row &&
                row.map( (status, index) => (
                  <FieldCellWrapper key={index} size={matrix.length}>
                    <FieldCell
                      data-column={++index}
                      data-status={status}
                      data-finish={status === 'finish' || status === 'start-finish' ? finishCellState : ''}
                      onClick={checkStatusCell}
                      tabIndex={0}
                    />
                  </FieldCellWrapper>
                ))
              }
            </FieldRow>
          ))
        }
      </Field>
      <WaySymbol
        data-animation={!!wayState}
        data-arrow={wayState}
        onClick={startHandler}
      >
      </WaySymbol>
    </FieldWrapper>
  )
}