import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function QuestionItem({ id, title, info }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="question-and-answer">
        <div className="question">
          <p>
            <b>{title}</b>{" "}
          </p>

          <div className="control-btns">
            <button
              onClick={() => {
                // setShowAnswer(false);
                setShowAnswer(!showAnswer);
              }}
            >
              {!showAnswer ? <FaPlus /> : <FaMinus />}
            </button>
          </div>
        </div>

        <div className="answer">{showAnswer && info}</div>
      </div>
    </>
  );
}

export default QuestionItem;
