import style from './StatusInfo.module.scss';

export function StatusInfo() {
  const statusInfo = {
    currentStatus: 'Standart',
    timeToCangeStatus: '10 часов  23 минуты',
  };
  return (
    <div className={style.statusInfoCard}>
      <div className={style.currentStatus}>
        <span className={style.titleCurrentStatus}>Текущий статус: </span>
        <span className={style.currentStatusData}>
          {statusInfo.currentStatus}
        </span>
      </div>
      <div className={style.timeToCangeStatus}>
        <span className={style.titleTimetoChangeStatus}>
          До смены статуса осталось:
        </span>
        <span className={style.timeToChangeStatusData}>
          {statusInfo.timeToCangeStatus}
        </span>
      </div>
    </div>
  );
}
