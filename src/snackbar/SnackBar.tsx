import "./SnackBar.css";

type SnackBarProps = {
  message: string;
  showSnackBar: boolean;
};

const SnackBar = ({ message, showSnackBar }: SnackBarProps) => {
  return (
    <div className={showSnackBar ? "snackbar snackbar-show" : "snackbar"}>
      {message}
    </div>
  );
};

export default SnackBar;
