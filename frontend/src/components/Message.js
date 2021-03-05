import React from "react";

const Message = ({ children }) => {
  return (
    <div className="alertMsg danger">
      <div className="msgIcon pull-left">
        <i className="fa fa-times-circle"></i>
      </div>
      {children}
    </div>
  );
};

export default Message;
