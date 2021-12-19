import FieldScreen from "./FieldScreen";
import {useSelector} from "react-redux";

export default function FieldScreenContainer({screenStatus}) {

  const {matrix, steps} = useSelector(state => state);

  return (
    <>
      <FieldScreen
        screenStatus={screenStatus}
        matrix={matrix}
        steps={steps}
      />
    </>
  )
}