import React, {useState} from 'react';
import {useDisclosure} from '@mantine/hooks';
import {Modal, Text} from '@mantine/core';

import DummyImage from '../../assets/images/fraijourMain/main/bottle1.png';

import styles from './storiesBlock.module.scss';

const dummyStories = [
  {title: 'Акции', src: DummyImage, content: 'Акции стори'},
  {title: 'Стримы', src: DummyImage, content: 'Стримы стори'},
  {title: 'Новинки', src: DummyImage, content: 'Новинки стори'},
  {title: 'Хиты', src: DummyImage, content: 'Хиты стори'},
  {title: 'Бренды', src: DummyImage, content: 'Бренды стори'},
];

const StoriesBlock: React.FunctionComponent = () => {
  const [opened, {open, close}] = useDisclosure(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (modalContent: any) => {
    setModalContent(modalContent);
    open();
  };

  return <div className={styles.wrapper}>
    <div className={styles.storiesBlock}>
      <Text className={styles.title}>Наши истории</Text>
      <div className={styles.storiesIcon}>
        {
          dummyStories.map((item) => (
            <div key={item.title} onClick={() => openModal(item.content)}>
              <img className={styles.image} src={item.src} alt={item.title}/>
              <Text className={styles.storyTitle}>
                {item.title}
              </Text>
            </div>))
        }
      </div>
      <Modal opened={opened} onClose={close} size="sm">
        {modalContent}
      </Modal>
    </div>
  </div>;
};

export default StoriesBlock;
