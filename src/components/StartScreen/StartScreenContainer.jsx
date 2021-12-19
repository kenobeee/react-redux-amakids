import StartScreen from "./StartScreen";
import {useDispatch, useSelector} from "react-redux";

import {updateFieldMatrixState, updateFieldSizeState} from "../../reducers/rootReducer";
import {getRandomNumber} from '../../utils/getRandomNumber';

export default function StartScreenContainer({changeScreen}) {

  const {stepCount, fieldWidth, fieldHeight} = useSelector(state => state);
  const dispatch = useDispatch();
  const updateFieldSize = (inputName, inputValue) => dispatch(updateFieldSizeState(inputName, inputValue));

  const createMatrix = () => {

    let matrix = [];
    const startCell = {
      column: getRandomNumber(1, fieldWidth),
      row: getRandomNumber(1, fieldHeight),
    }

    const newStep = (currentCell, steps = [], currentStepCount = 1) => {

      if (currentStepCount <= stepCount) {

        let canBeStep = [];

        if (currentCell.column === 1) {

          if (currentCell.row === 1) canBeStep = ['right', 'down'];
          else if (currentCell.row === fieldHeight) canBeStep = ['right', 'up'];
          else canBeStep = ['right', 'up', 'down'];

        } else if (currentCell.column === fieldWidth) {

          if (currentCell.row === 1) canBeStep = ['left', 'down'];
          else if (currentCell.row === fieldHeight) canBeStep = ['left', 'up'];
          else canBeStep = ['left', 'up', 'down'];

        } else if (currentCell.row === 1) {

          if (currentCell.column === 1) canBeStep = ['right', 'down'];
          else if (currentCell.column === fieldWidth) canBeStep = ['left', 'down'];
          else canBeStep = ['left', 'down', 'right'];

        } else if (currentCell.row === fieldHeight) {

          if (currentCell.column === 1) canBeStep = ['right', 'up'];
          else if (currentCell.column === fieldWidth) canBeStep = ['left', 'up'];
          else canBeStep = ['left', 'up', 'right'];

        } else {
          canBeStep = ['left', 'up', 'right', 'down'];
        }

        const currentStep = canBeStep[getRandomNumber(0, canBeStep.length)];

        steps.push(currentStep);

        currentCell.column = currentStep === 'left' ? currentCell.column -= 1 : currentCell.column;
        currentCell.column = currentStep === 'right' ? currentCell.column += 1 : currentCell.column;
        currentCell.row = currentStep === 'up' ? currentCell.row -= 1 : currentCell.row;
        currentCell.row = currentStep === 'down' ? currentCell.row += 1 : currentCell.row;

        return newStep(currentCell, steps, ++currentStepCount);

      } else {

        const finishCell = currentCell;
        return {finishCell, steps};

      }
    }

    const {finishCell, steps} = newStep(Object.assign({}, startCell));

    for (let rowIndex = 1; rowIndex <= fieldHeight; rowIndex++) {
      let submatrix = [];
      for (let columnIndex = 1; columnIndex <= fieldWidth; columnIndex++) {
        if (
          rowIndex === finishCell.row &&
          columnIndex === finishCell.column &&
          rowIndex === startCell.row &&
          columnIndex === startCell.column
        ) {
          submatrix.push('start-finish');
        } else if (
          rowIndex === finishCell.row &&
          columnIndex === finishCell.column
        ) {
          submatrix.push('finish');
        } else if (
          rowIndex === startCell.row &&
          columnIndex === startCell.column
        ) {
          submatrix.push('start');
        } else {
          submatrix.push('neutral')
        }
      }
      matrix.push(submatrix)
    }

    dispatch(updateFieldMatrixState(matrix, startCell, finishCell, steps));
  }

  return (
    <>
      <StartScreen
        updateFieldSize={updateFieldSize}
        changeScreen={changeScreen}
        createMatrix={createMatrix}
      />
    </>
  )
}