import { Outlet } from 'react-router-dom';
import { AsideMenu } from '../components/AsideMenu/AsideMenu';
import { Promo } from '../pages/Promo/Promo';
import style from './MainLayout.module.scss';

export function MainLayout() {
  return (
    <div className={style.mainPageLayout}>
      <AsideMenu />
      <Outlet>
        <Promo />
      </Outlet>
    </div>
  );
}
