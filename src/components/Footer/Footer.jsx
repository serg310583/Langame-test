import style from './Fotter.module.scss';

const footerMenu = [
  'Информация',
  'Вакансии',
  'Помощь',
  'Конфиденциальность',
  'Правила',
  'FAQ',
  'Прайс - лист',
];

export function Footer() {
  return (
    <div className={style.footerWrapper}>
      <nav>
        <ul className={style.menuList}>
          {footerMenu.map((menuItem, index) => (
            <li className={style.menuItem} key={index}>
              <a className={style.menuLink} href='/'>
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
