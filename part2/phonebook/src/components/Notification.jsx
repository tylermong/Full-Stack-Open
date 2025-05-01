const Notification = ({ message, type }) => {
  if (message === null || type == null) {
    return null;
  }
  else if (type === "error") {
    return <div className="error">{message}</div>;
  }
  else {
    return <div className="success">{message}</div>;
  }
};

export default Notification;
