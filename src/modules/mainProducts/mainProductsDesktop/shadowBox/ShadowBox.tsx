import React from 'react';

import {useImagePreloader} from '../../../../utils/helpers/useImagePreloader';

import {Preloader} from '../../../../components/preloader/Preloader';

import styles from './shadowBox.module.scss';

type ShadowBoxProps = {
  url: string;
  handleClose: () => void;
};

export const ShadowBox: React.FunctionComponent<ShadowBoxProps> = (props) => {
  const {url, handleClose} = props;
  const {isPreloaded} = useImagePreloader(url ? [url] : []);
  if(!isPreloaded) {
    return <Preloader className={styles.preloader} />;
  }
  return (
    <img
      src={url}
      alt=""
      className={styles.shadowBox}
      onClick={handleClose}
    />
  );
};

export default React.memo(ShadowBox);
