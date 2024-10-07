import style from './AdsCard.module.scss';

export function AdsCard() {
  return (
    <div className={style.adsWrapper}>
      <div className={style.adsCard1}>
        <img className={style.imgAds1} src='./assets/img/ADS.png' alt='ads' />
      </div>
      <div className={style.adsCard2}>
        <img className={style.imgAds2} src='./assets/img/ADS2.png' alt='ads' />
      </div>
    </div>
  );
}
