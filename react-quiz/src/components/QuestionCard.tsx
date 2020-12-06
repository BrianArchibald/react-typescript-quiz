import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({  // : and React.FC = to tell react this will be a functional component
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => (
    <div>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question}} />
        <div>
        {answers.map(answer => (
            <div>
                <button disabled={userAnswer} onClick={callback}>

                </button>
            </div>
         ))}
        </div>
    </div>
);

export default QuestionCard;
