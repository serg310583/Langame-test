import style from './CurrentSessionInfo.module.scss';

export function CurrentSessionInfo() {
  const sessionInfo = {
    timeToEnd: '120 мин',
    dateSessionEnd: '14.12.2020, 20:24',
  };
  return (
    <div className={style.curSessCard}>
      <h4 className={style.titleCard}>Информация о текущей сесcии</h4>

      <div className={style.minToEnd}>
        <span className={style.minToEndTitle}>Осталось минут: </span>
        <span className={style.minToEndData}>{sessionInfo.timeToEnd}</span>
      </div>
      <div className={style.dateEnd}>
        <span className={style.dateEndTitle}>Сессия истекает:</span>
        <span className={style.dateEndData}>{sessionInfo.dateSessionEnd}</span>
      </div>
    </div>
  );
}
