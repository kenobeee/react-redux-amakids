import FieldScreen from "./FieldScreen";
import {useDispatch, useSelector} from "react-redux";
import {deleteOldFieldState, updateResultOfGameState} from "../../reducers/rootReducer";

export default function FieldScreenContainer({changeScreen, screenStatus}) {

  const {matrix, steps} = useSelector(state => state);
  const dispatch = useDispatch();
  const updateResultOfGame = result => dispatch(updateResultOfGameState(result));

  return (
    <>
      <FieldScreen
        changeScreen={changeScreen}
        screenStatus={screenStatus}
        matrix={matrix}
        steps={steps}
        updateResultOfGame={updateResultOfGame}
      />
    </>
  )
}