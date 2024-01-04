interface Props {
  type: "success" | "warning" | "danger";
  message: string;
}

const MessageBox = ({ type, message }: Props) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default MessageBox;
