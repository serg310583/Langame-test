import style from './MyTariff.module.scss';

export function MyTariff() {
  return (
    <div className={style.myTariff}>
      <span className={style.numTariff}>23</span>
      <span className={style.titleTariff}>Стандарт</span>
    </div>
  );
}
