import React, { useState } from "react";

import questions from "../../assets/Questions";
import QuestionItem from "./QuestionItem";

function Questions() {
  const [question, setQuestion] = useState(questions);

  return (
      <>
        {question.map((item) => {
          return <QuestionItem key={item.id} {...item} />;
        })}
    </>
  );
}

export default Questions;
