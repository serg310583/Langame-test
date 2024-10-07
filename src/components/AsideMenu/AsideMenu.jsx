import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './AsideMenu.module.scss';

export function AsideMenu() {
  const [activeItemId, setActiveItemId] = useState(null);

  const menuItems = [
    {
      imgSrc: '/assets/img/aside/transaction.svg',
      itemTitle: 'История транзакций',
      path: '/transactions',
      id: 1,
    },
    {
      imgSrc: '/assets/img/aside/book.svg',
      itemTitle: 'Забронировать',
      path: '/book',
      id: 2,
    },
    {
      imgSrc: '/assets/img/aside/settings.svg',
      itemTitle: 'Настройки',
      path: '/settings',
      id: 3,
    },
    {
      imgSrc: '/assets/img/aside/support.svg',
      itemTitle: 'Поддержка',
      path: '/support',
      id: 4,
    },
  ];

  const handleClick = (id) => {
    setActiveItemId(id);
  };
  return (
    <div className={style.asideMenuWrapper}>
      <div className={style.logo}>
        <a href='#'>
          <img src='./assets/img/logo.png' alt='logo' />
        </a>
      </div>
      <nav className={style.AsideMenu}>
        <ul className={style.menuList}>
          {menuItems.map((item) => (
            <li key={item.id} className={style.menuListItem}>
              <NavLink
                to='#'
                onClick={() => handleClick(item.id)}
                className={style.menuListLink}
              >
                <div className={style.menuListImgWrapper}>
                  <img
                    className={style.menuListImg}
                    src={item.imgSrc}
                    alt='item.item.Title'
                  />
                  {activeItemId === item.id && (
                    <img
                      className={style.menuLinkCheck}
                      src='/assets/img/aside/ellipse.svg'
                      alt='checked'
                    />
                  )}
                </div>

                <span className={style.menuLinkTitle}>{item.itemTitle}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
