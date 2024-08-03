import styled from "styled-components";
import { QUESTIONS } from "../data";
import { QuizItem } from "./QuizItem";
import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Score from "./Score";

export const Quiz = () => {
  const context = useContext(QuizContext);
  console.log(context);
  return (
    <Wrapper>
      <Heading>Wellcome to Quiz</Heading>
      <QuizWrapper>
        {context.showBall ? (
          <Score result={context.ball} />
        ) : (
          <>
            {" "}
            <div>
              {QUESTIONS[context.level].questionText} {context.level + 1}/4
            </div>
            <div>
              {QUESTIONS[context.level].answerOptions.map((item) => {
                return <QuizItem onAnswer={context.updateBall} item={item} />;
              })}
            </div>
          </>
        )}
      </QuizWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #5c5cb2;
  padding: 20px;
  border-radius: 10px;
  max-width: 100%;
  box-shadow: 1px 1px rgb(0, 0, 0, 0.76);
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`;

const QuizWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;
