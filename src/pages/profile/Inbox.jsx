import React, { useState } from "react";

import messages from "../../assets/Messages";
function Inbox() {
  const [message, setMessage] = useState(messages);
  return (
    <>
      <h2 className="text-left">Inbox</h2>
      <hr />

      {message.map((item) => {
        return <Message key={item.id} {...item} />;
      })}
    </>
  );
}

export default Inbox;

export const Message = ({ date, title, message }) => {
  return (
    <>
      <div className="message">
        <p className="message-date">
          <b>{date}</b>
        </p>

        <div className="message-info">
          <h6 className="message-title">
            {title}
          </h6>
          <p>{message}</p>
          <p></p>
        </div>
      </div>
    </>
  );
};
