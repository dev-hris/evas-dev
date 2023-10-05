import React, {useState} from 'react';
import cn from 'classnames';

import {useInView} from 'react-intersection-observer';
import {useNavigate} from 'react-router-dom';

import {RoundButton} from '../../components/roundButton/RoundButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';
import {CustomLabel} from '../../components/customLabel/CustomLabel';
import {ReactComponent as ArrowToLeft} from '../../assets/icons/arrowToLeft.svg';
import {ReactComponent as ArrowToDown} from '../../assets/icons/arrowToDown.svg';

import {CustomButton} from '../../components/customButton/CustomButton';

import {PATH} from '../../utils/constants/routeConstants';

import {splitStringByBr} from '../../utils/helpers/splitString';

import styles from './promo.module.scss';

type Props = {
    promo: {
      image: string;
      purpose: string;
      description: string;
      labels: {text: string}[];
      title: string;
    };
    clickOnButton: () => void
}

export const Promo: React.FunctionComponent<Props> = ({
  promo,
  clickOnButton,
}) => {
  const navigate = useNavigate();

  const [pills] = useState([
    {
      className: styles.pill1, title: promo.labels[0]?.text,
    },
    {
      className: styles.pill2, title: promo.labels[1]?.text,
    },
    {
      className: styles.pill3, title: promo.labels[2]?.text,
    },
  ]);
  const {ref, inView} = useInView({
    threshold: 1,
  });

  const redirectToBrand = () => {
    navigate(`${PATH.fraijour}`);
  };

  return (<div
    className={cn(styles.container, {[styles.containerScrolled]: inView})}
    style={{backgroundImage: `url('${promo.image}')`}}
  >
    <div className={styles.background} style={{backgroundImage: `url('${promo.image}')`}}/>
    <div className={styles.content}>
      <div>
        <CustomButton
          className={styles.buttonBack}
          variant={ButtonVariant.White}
          onClick={redirectToBrand}>
          <>
            <ArrowToLeft className={styles.iconBack} />
            <span>назад</span>
          </>
        </CustomButton>
        <h2 className={styles.subtitle}>{promo.purpose}</h2>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{splitStringByBr(promo.title).map((part, id) =>
            <div key={id}>
              {part}
              <br/>
            </div>)}</h1>
        </div>
      </div>
      <div>
        <div className={styles.description}>{splitStringByBr(promo.description).map((part, id) =>
          <div key={id}>
            {part}
            <br/>
          </div>)}</div>
      </div>
      <div className={styles.buttonDownBlock}>
        <RoundButton
          className={styles.buttonDown}
          variant={ButtonVariant.Primary}
          onClick={clickOnButton}>
          <ArrowToDown className={styles.iconDown} />
        </RoundButton>
      </div>
    </div>
    <div className={cn(styles.pills, {[styles.active]: inView})}>
      {pills.map(({className, title}, id) => (
        <CustomLabel
          className={cn(className, {[styles.active]: inView})}
          title={title}
          key={id}
        />
      ))}
    </div>
    <div className={styles.blockCheckScroll} ref={ref} />
  </div>);
};
