import FieldScreen from "./FieldScreen";
import {useSelector} from "react-redux";

export default function FieldScreenContainer({screenStatus}) {

  const {stepCount, fieldWidth, fieldHeight} = useSelector(state => state);

  return (
    <>
      <FieldScreen screenStatus={screenStatus} />
    </>
  )
}