import style from './CurrentTime.module.scss';

export function CurrentTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  return <span className={style.time}>{timeString}</span>;
}
