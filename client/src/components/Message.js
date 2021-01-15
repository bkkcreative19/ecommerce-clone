import React from "react";

const Message = (props) => {
  console.log(props.message);
  return (
    <div className="message">
      <span>{props.message.name}</span>
      {/* <button onClick={props.clearError}>X</button> */}
    </div>
  );
};

export default Message;
