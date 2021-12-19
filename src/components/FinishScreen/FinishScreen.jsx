import {
  FinishWrapper,
  FinishTitle,
  ReloadGame
} from './StyledComponents'
import {store} from "../../store";

export default function FinishScreen({changeScreen, screenStatus, result, cleanOldField}) {

  const resultTitle = result === 'win' ? 'Поздравляем с победой!' : 'Не удалось найти бамбони';

  const reloadGame = () => {
    cleanOldField();
    changeScreen('thirdScreen', 'firstScreen');
  }

  return (
    <FinishWrapper data-status={screenStatus}>
      <FinishTitle>
        {resultTitle}
      </FinishTitle>
      <ReloadGame onClick={reloadGame}>
        Начать заново
      </ReloadGame>
    </FinishWrapper>
  )
}