import { Link } from 'react-router-dom';
import { ControlLang } from '../../components/ControlLang/ControlLang';
import { CurrentTime } from '../../components/CurrentTime/CurrentTime';
import { Footer } from '../../components/Footer/Footer';
import FormRegistration from '../../components/FormRegistration/FormRegistration';
import { MyTariff } from '../../components/MyTariff/MyTariff';
import { TypeReg } from '../../components/TypeReg/TypeReg';
import style from './Register.module.scss';

export function Register() {
  return (
    <section className={style.wrapperRegister}>
      <div className={style.rateColumn}>
        <MyTariff />
      </div>
      <div className={style.registerColumn}>
        <h2 className={style.titleRegistration}>Регистрация</h2>
        <TypeReg />
        <FormRegistration />
        <div>
          <Link className={style.linkToMain} to={'/'}>
            <img
              src='./assets/img/arrow.png'
              alt='arrow'
              style={{ marginRight: 11 }}
            />
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
          </Link>
        </div>
        <Footer />
      </div>
      <div className={style.langAndTimeColumn}>
        <div className={style.langAndTimeBlock}>
          <ControlLang />
          <CurrentTime />
        </div>
      </div>
    </section>
  );
}
