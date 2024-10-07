import { AdsCard } from '../../components/AdsCard/AdsCard';
import { MenuSession } from '../../components/MenuSession/MenuSession';
import { SessionInfo } from '../../components/SessionInfo/SessionInfo';
import { Tarifs } from '../../components/Tarifs/Tarifs';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import style from './Promo.module.scss';

export function Promo() {
  return (
    <section className={style.wrapperPromo}>
      <article className={style.mainContent}>
        <div className={style.cardBlock}>
          <UserInfo />
          <SessionInfo />
          <AdsCard />
        </div>
        <Tarifs />
      </article>
      <MenuSession />
      <div className={style.copyright}>
        <img src='./assets/img/COPYRIGHT.png' alt='COPYRIGHT' />
      </div>
    </section>
  );
}
