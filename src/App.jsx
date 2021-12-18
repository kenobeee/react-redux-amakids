import StartScreenContainer from './components/StartScreen/StartScreenContainer';
import FieldScreenContainer from './components/FieldScreen/FieldScreenContainer';
import FinishScreenContainer from './components/FinishScreen/FinishScreenContainer';
import {Main, MainTitle} from "./BaseStyledComponents";
import {useState} from "react";

export default function App() {

  const [screenStatus, setScreenStatus] = useState('hidden');
  const changeScreen = () => {
    setScreenStatus('active')
  }

  return (
    <Main>
      <MainTitle>Лабиринт</MainTitle>
      <StartScreenContainer changeScreen={changeScreen} />
      <FieldScreenContainer screenStatus={screenStatus} />
      <FinishScreenContainer />
    </Main>
  );
}