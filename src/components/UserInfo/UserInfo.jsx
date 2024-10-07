import { Avatar } from './Avatar/Avatar';
import { StatusInfo } from './StatusInfo/StatusInfo';
import style from './UserInfo.module.scss';

export function UserInfo() {
  return (
    <div className={style.blockUserInfo}>
      <Avatar />
      <StatusInfo />
    </div>
  );
}
