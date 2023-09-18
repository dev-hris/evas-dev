import React, {useState, useEffect} from 'react';

import {Text} from '@mantine/core';

import {CustomButton} from '../../../components/customButton/CustomButton';

import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';

import styles from './quiz.module.scss';
import QuizOption from './quizOption/QuizOption';

type Props = {
  quizStage: {
    id: number;
    question: string;
    options: string[];
    hint: string;
  } | undefined;
  quizEnd: boolean;
  submit: (selectedOptions: string[]) => void;
  textSubmit: string;
}

export const Quiz: React.FunctionComponent<Props> = ({
  quizStage,
  quizEnd,
  submit,
  textSubmit}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [quizStage]);

  const changeSelectedOptions = (answer: string) => {
    const indexOption = selectedOptions.findIndex((option) => option === answer);
    if (indexOption !== -1) {
      const newOptions = [...selectedOptions];
      newOptions.splice(indexOption, 1);
      setSelectedOptions(newOptions);
    }
    else {
      setSelectedOptions([...selectedOptions, answer]);
    }
  };

  const handleSubmit = () => {
    submit(selectedOptions);
  };

  return (<div className={styles.quiz}>
    {quizStage &&
      <>
        {!quizEnd ?
          <>
            <Text className={styles.question}>{quizStage.question}</Text>
            <div className={styles.optionsBlock}>
              {quizStage.options.map((option, i) =>
                <QuizOption
                  key={i}
                  text={option}
                  active={selectedOptions.includes(option)}
                  onClick={changeSelectedOptions}/>)}
            </div>
          </>
          : <Text className={styles.question}>Попробуйте это!</Text>
        }
        <div className={styles.navigation}>
          <CustomButton
            variant={ButtonVariant.BlueGem}
            className={styles.submitButton}
            disabled={selectedOptions.length === 0}
            onClick={handleSubmit}>
            {textSubmit}
          </CustomButton>
        </div>
      </>
    }
  </div>);
};

export default Quiz;
