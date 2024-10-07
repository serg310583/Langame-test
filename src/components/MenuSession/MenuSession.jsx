import style from './MenuSession.module.scss';
export function MenuSession() {
  const menuItems = [
    {
      imgSrc: '/assets/img/bottom/device.png',
      itemTitle: 'Вернуться на рабочий стол',
      path: '/worktable',
      id: 1,
    },
    {
      imgSrc: '/assets/img/bottom/selectGame.png',
      itemTitle: 'Выбрать игру',
      path: '/changeGame',
      id: 2,
    },
    {
      imgSrc: '/assets/img/bottom/problem.png',
      itemTitle: 'Сообщить о проблеме',
      path: '/problem',
      id: 3,
    },
    {
      imgSrc: '/assets/img/bottom/session.png',
      itemTitle: 'Продлить сессию',
      path: '/session',
      id: 4,
    },
    {
      imgSrc: '/assets/img/bottom/logOut.png',
      itemTitle: 'Завершить сессию',
      path: '/closeSession',
      id: 5,
    },
  ];

  return (
    <div className={style.sessionMenu}>
      {menuItems.map((item) => (
        <button key={item.id} className={style.menuSessionButton}>
          <img
            className={style.menuListImg}
            src={item.imgSrc}
            alt='item.item.Title'
          />

          <span className={style.menuSessionTitle}>{item.itemTitle}</span>
        </button>
      ))}
    </div>
  );
}
