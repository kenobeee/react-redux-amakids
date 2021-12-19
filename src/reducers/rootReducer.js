const UPDATE_SIZE = 'UPDATE_SIZE';
const UPDATE_MATRIX = 'UPDATE_MATRIX';
const UPDATE_RESULT = 'UPDATE_RESULT';
const CLEAN_FIELD = 'CLEAN_FIELD';

const fieldState = {
  stepCount: 0,
  fieldWidth: 0,
  fieldHeight: 0,
  matrix: [],
  steps: [],
  startCell: {},
  finishCell: {},
  result: ''
}

export const updateFieldSizeState = (inputName, inputValue) => ({
  type: UPDATE_SIZE,
  [inputName]: inputValue
});

export const updateFieldMatrixState = (matrix, startCell, finishCell, steps) => ({
  type: UPDATE_MATRIX,
  matrix,
  startCell,
  finishCell,
  steps
})

export const updateResultOfGameState = result => ({
  type: UPDATE_RESULT,
  result
})

export const deleteOldFieldState = (newState = {}) => ({
  type: CLEAN_FIELD,
  newState
})

export const rootReducer = (previousState = fieldState, action) => {
  switch (action.type) {
    case UPDATE_SIZE:
      return {
        ...previousState,
        stepCount: action.stepCount || previousState.stepCount,
        fieldWidth: action.fieldWidth || previousState.fieldWidth,
        fieldHeight: action.fieldHeight || previousState.fieldHeight
      }
    case UPDATE_MATRIX:
      return {
        ...previousState,
        matrix: action.matrix,
        startCell: action.startCell,
        finishCell: action.finishCell,
        steps: action.steps
      }
    case UPDATE_RESULT:
      return {
        ...previousState,
        result: action.result
      }
    case CLEAN_FIELD:
      return {
        stepCount: 0,
        fieldWidth: 0,
        fieldHeight: 0,
        matrix: [],
        steps: [],
        startCell: {},
        finishCell: {},
        result: ''
      }
    default:
      return previousState;
  }
}