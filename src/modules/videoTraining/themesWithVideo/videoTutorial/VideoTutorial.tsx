import React, {useRef, useEffect} from 'react';

import {ReactComponent as Play} from '../../../../assets/icons/play.svg';
import {ReactComponent as Pause} from '../../../../assets/icons/pause.svg';

import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {
  getActiveVideoSelector,
  videoPlay,
  videoStop,
} from '../../../../redux/videoTraining/videoTrainingSlice';

import styles from './videoTutorial.module.scss';

export const VideoTutorial = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);
  const activeId = useAppSelector((state) => state.videoTrainingSlice.activeId);
  const video = useAppSelector(getActiveVideoSelector(activeId));
  const isPlay = useAppSelector(
    (state) => state.videoTrainingSlice.isVideoPlay,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (sourceRef.current && videoRef.current && video) {
      dispatch(videoStop());
      videoRef.current.pause();
      sourceRef.current.setAttribute('src', video);
      sourceRef.current.setAttribute('type', 'video/mp4');
      videoRef.current.load();
    }
  }, [video]);

  useEffect(() => {
    const fn = () => {
      if (!videoRef.current) {
        return;
      }
      if (isPlay) {
        videoRef.current.play();
        return;
      };
      videoRef.current.pause();
    };
    fn();
  }, [isPlay]);

  const handleClick = () => {
    if (!videoRef.current) {
      return;
    }
    if (isPlay) {
      dispatch(videoStop());
      return;
    }
    dispatch(videoPlay());
  };
  return (
    <div className={styles.container}>
      <video ref={videoRef} className={styles.video}>
        <source ref={sourceRef} src={video} type="video/mp4" />
      </video>
      <div onClick={handleClick} className={styles.btn}>
        {!isPlay ? <Play /> : <Pause />}
      </div>
    </div>
  );
};
