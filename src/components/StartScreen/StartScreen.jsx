import {useEffect, useState} from "react";
import {
  StartWrapper,
  StartWindow,
  StartForm,
  FormLayer,
  FormLabel,
  FormInput,
  FormDescription,
  FormSubmit
} from './StyledComponents';

export default function StartScreen({changeScreen, screenStatus, updateFieldSize, createMatrix}) {
  const [buttonState, setButtonState] = useState(true);
  const [inputState, setInputState] = useState({
    stepCount: '',
    fieldWidth: '',
    fieldHeight: ''
  });

  const formHandler = event => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputMaxValue = Number(event.target.max);
    const inputMinValue = Number(event.target.min)

    inputValue > inputMaxValue ||
    inputValue < inputMinValue ||
    inputValue === 0 ?
      setInputState({...inputState, [inputName]: ''}) :
      setInputState({...inputState, [inputName]: inputValue});

    updateFieldSize(inputName, inputValue);
  }

  useEffect(() => {
    inputState.stepCount &&
    inputState.fieldWidth &&
    inputState.fieldHeight ?
      setButtonState(false) :
      setButtonState(true);
  }, [
    inputState.stepCount,
    inputState.fieldWidth,
    inputState.fieldHeight,
  ]);

  const changeScreenHandler = () => {
    setInputState({
      stepCount: '',
      fieldWidth: '',
      fieldHeight: ''
    })
    changeScreen('firstScreen', 'secondScreen');
    createMatrix();
  }

  return (
    <StartWrapper data-status={screenStatus}>
      <StartWindow>
        <StartForm>

          <FormLayer>
            <FormLabel>Кол-во ходов :</FormLabel>
            <FormInput
              name="stepCount"
              type="number"
              value={inputState.stepCount}
              max="20"
              min="1"
              onChange={formHandler}
            />
            <FormDescription>(от 1-го до 20-ти)</FormDescription>
          </FormLayer>

          <FormLayer>
            <FormLabel>Ширина поля :</FormLabel>
            <FormInput
              name="fieldWidth"
              type="number"
              value={inputState.fieldWidth}
              max="9"
              min="3"
              onChange={formHandler}
            />
            <FormDescription>(от 3-х до 9-ти)</FormDescription>
          </FormLayer>

          <FormLayer>
            <FormLabel>Высота поля :</FormLabel>
            <FormInput
              name="fieldHeight"
              type="number"
              value={inputState.fieldHeight}
              max="9"
              min="3"
              onChange={formHandler}
            />
            <FormDescription>(от 3-х до 9-ти)</FormDescription>
          </FormLayer>

          <FormSubmit
            onClick={changeScreenHandler}
            disabled={buttonState}
          >
            Подтвердить
          </FormSubmit>
          
        </StartForm>
      </StartWindow>
    </StartWrapper>
  )
}