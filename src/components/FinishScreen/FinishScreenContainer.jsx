import FinishScreen from "./FinishScreen";
import {useDispatch, useSelector} from "react-redux";
import {deleteOldFieldState} from "../../reducers/rootReducer";

export default function FinishScreenContainer({changeScreen, screenStatus}) {

  const {result} = useSelector(state => state);
  const dispatch = useDispatch();
  const cleanOldField = () => dispatch(deleteOldFieldState())

  return (
    <>
      <FinishScreen
        changeScreen={changeScreen}
        screenStatus={screenStatus}
        result={result}
        cleanOldField={cleanOldField}
      />
    </>
  )
}