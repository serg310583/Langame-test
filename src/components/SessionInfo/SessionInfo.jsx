import { Balance } from './Balance/Balance';
import { CurrentSessionInfo } from './CurrentSessionInfo/CurrentSessionInfo';
import style from './SessionInfo.module.scss';

export function SessionInfo() {
  return (
    <div className={style.sessionInfoCards}>
      <CurrentSessionInfo />
      <Balance />
    </div>
  );
}
