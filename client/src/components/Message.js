import React from "react";

const Message = (props) => {
  return (
    <div className="message">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
};

export default Message;
