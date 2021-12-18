const UPDATE_FIELD = 'UPDATE_FIELD';

const fieldState = {
  stepCount: 0,
  fieldWidth: 1,
  fieldHeight: 1,
  steps: [],
  startCell: '',
  finishCell: '',
}

export const updateFieldState = ([inputName, inputValue]) => ({
  type: UPDATE_FIELD,
  [inputName]: inputValue
});

export const rootReducer = (previousState = fieldState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...previousState,
        stepCount: action.stepCount || previousState.stepCount,
        fieldWidth: action.fieldWidth || previousState.fieldWidth,
        fieldHeight: action.fieldHeight || previousState.fieldHeight
      }
    default:
      return previousState;
  }
}