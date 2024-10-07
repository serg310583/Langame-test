import style from './Avatar.module.scss';
export function Avatar() {
  const userInfo = {
    name: 'Алексей Костылев Николаевич',
    img: './assets/img/avatar.png',
  };

  return (
    <div className={style.avatarBlock}>
      <img className={style.avatarImg} src={userInfo.img} alt='avatar' />
      <span className={style.avatarName}>{userInfo.name}</span>
    </div>
  );
}
