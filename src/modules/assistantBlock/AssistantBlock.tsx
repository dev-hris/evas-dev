import React, {useState, useEffect} from 'react';
import {Text} from '@mantine/core';

import VideoPart from './videoPart/VideoPart';
import Quiz from './quiz/Quiz';

import styles from './assistantBlock.module.scss';

const quiz = [
  {
    id: 1,
    question: 'Что ты хочешь получить?',
    options: [
      'Отличную кожу',
      'Улучшить здоровье',
      'Улучшить кожу глаз',
      'Сохранить молодость',
      'Шикарные волосы',
      'Уменьшить морщины',
    ],
    hint: 'Расскажи немного больше о себе, чтобы порекомендовать лучшее',
  },
  {
    id: 2,
    question: 'Что ты хочешь получить? 2',
    options: [
      'Отличную кожу',
      'Улучшить здоровье',
      'Улучшить кожу глаз',
      'Сохранить молодость',
      'Шикарные волосы',
      'Уменьшить морщины',
    ],
    hint: 'Расскажи немного больше о себе еще раз',
  },
  {
    id: 3,
    question: 'Что ты хочешь получить? 3',
    options: [
      'Отличную кожу',
      'Улучшить здоровье',
      'Улучшить кожу глаз',
      'Сохранить молодость',
      'Шикарные волосы',
      'Уменьшить морщины',
    ],
    hint: 'Расскажи немного больше о себе еще раз 4',
  },
  {
    id: 4,
    question: 'Насколько ты готова посвятить себя уходу?',
    options: [
      'до 30 минут в день',
      '1 час в день',
      '2 часа в день',
      '2-3 часа в день',
      'Любое время',
    ],
    hint: 'Отлично! А теперь сколько у тебя есть времени?',
  },
];

export interface IQuiz {
  id: number;
  question: string;
  options: string[];
  hint: string;
}

export interface IAnswer {
  id: number;
  options: string[];
}

type AssistantBlockProps = {
  refScroll: React.RefObject<HTMLDivElement>;
};

export const AssistantBlock: React.FunctionComponent<AssistantBlockProps> = ({
  refScroll,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<IQuiz>();
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [quizEnd, setQuizEnd] = useState(false);
  const [hint, setHint] = useState<string>('');
  const [submitText, setSubmitText] = useState<string>('');

  useEffect(() => {
    setCurrentQuestion(quiz[0]);
    setHint(quiz[0].hint);
    setSubmitText(`${quiz[0].id}/${quiz.length} Далее`);
  }, []);

  const submit = (selectedOptions: string[]) => {
    setSubmitText((_) => {
      const answer = {
        id: currentQuestion?.id || 0,
        options: selectedOptions,
      };
      setAnswers([...answers, answer]);
      if (currentQuestion && currentQuestion.id < quiz.length) {
        const newQuestion = quiz[currentQuestion.id];
        setCurrentQuestion(newQuestion);
        setHint(newQuestion.hint);
        return `${newQuestion.id}/${quiz.length} Далее`;
      } else {
        setQuizEnd(true);
        setHint('Вот мои рекомендации! Изучи их и тебе понравится!');
      }
      return 'Понятно';
    });
  };

  return (
    <div className={styles.assistantBlock}>
      <div className={styles.wrapper} ref={refScroll}>
        <Text className={styles.subTitle}>онлайн помощник</Text>
        <Text className={styles.title}>Я помогу подобрать уход для тебя!</Text>
        <div className={styles.block}>
          <div className={styles.video}>
            <VideoPart hint={hint} />
          </div>
          <div className={styles.quiz}>
            <Quiz
              quizStage={currentQuestion}
              quizEnd={quizEnd}
              textSubmit={submitText}
              submit={submit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantBlock;
