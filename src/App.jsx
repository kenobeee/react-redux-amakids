import StartScreenContainer from './components/StartScreen/StartScreenContainer';
import FieldScreenContainer from './components/FieldScreen/FieldScreenContainer';
import FinishScreenContainer from './components/FinishScreen/FinishScreenContainer';
import {Main, MainTitle} from "./BaseStyledComponents";
import {useState} from "react";

export default function App() {

  const [screenStatus, setScreenStatus] = useState({
    firstScreen: 'active',
    secondScreen: 'hidden',
    thirdScreen: 'hidden'
  });

  const changeScreen = (currentScreen, nextScreen) => {
    setScreenStatus({
      ...screenStatus,
      [currentScreen]: 'hidden',
      [nextScreen]: 'active',
    })
  }

  return (
    <Main>
      <MainTitle>Лабиринт</MainTitle>
      <StartScreenContainer
        changeScreen={changeScreen}
        screenStatus={screenStatus.firstScreen}
      />
      <FieldScreenContainer
        changeScreen={changeScreen}
        screenStatus={screenStatus.secondScreen}
      />
      <FinishScreenContainer
        changeScreen={changeScreen}
        screenStatus={screenStatus.thirdScreen}
      />
    </Main>
  );
}