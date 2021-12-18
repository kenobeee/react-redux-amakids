import StartScreen from "./StartScreen";
import {useDispatch} from "react-redux";
import {updateFieldState} from "../../reducers/rootReducer";

export default function StartScreenContainer({changeScreen}) {

  const dispatch = useDispatch();
  const updateMyFieldState = ([inputName, inputValue]) => {
    dispatch(updateFieldState([inputName, inputValue]));
  }

  return (
    <>
      <StartScreen
        updateMyFieldState={updateMyFieldState}
        changeScreen={changeScreen}
      />
    </>
  )
}