import style from './Balance.module.scss';

export function Balance() {
  const money = {
    cash: 15000,
    bonus: 1200,
  };
  const cashFmt = money.cash.toLocaleString('ru-RU');
  const bonusFmt = money.bonus.toLocaleString('ru-RU');
  return (
    <div className={style.balanceCard}>
      <div className={style.titleBlock}>
        <h4 className={style.titleCard}>Основной счет</h4>
        <button className={style.buttonRefresh}>
          <img src='./assets/img/refresh.svg' alt='refresh' />
        </button>
      </div>
      <div className={style.cashBlock}>
        <span className={style.cash}>
          {cashFmt} <span className={style.simbolCash}>₽</span>
        </span>
        <div className={style.bonusBlock}>
          <span className={style.bonus}>
            {bonusFmt} <span className={style.simbolBonus}>₽</span>{' '}
          </span>
          <span className={style.titleBonus}>Бонусный счет</span>
        </div>
      </div>
      <button className={style.buttonAddCash}>пополнить</button>
    </div>
  );
}
