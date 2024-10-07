import DefaultButton from '../../UI/Buttons/DefaultButton';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';
import style from './TypeReg.module.scss';

export function TypeReg() {
  return (
    <div className={style.buttonsBlock}>
      <PrimaryButton
        width='156px'
        height='37px'
        buttonText='ПОЛНАЯ'
        iconAfterText='/assets/img/info.svg'
      />

      <DefaultButton
        buttonText='УПРОЩЕННАЯ'
        width='156'
        height='37px'
        background='#EFEFEF'
        borderColor='#efefef'
      />
    </div>
  );
}
