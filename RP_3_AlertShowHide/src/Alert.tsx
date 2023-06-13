interface Props {
 onClick: () => void;
}

const Alert = ({ onClick }: Props) => {
 return (
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
   My Alert
   <button
    type="button"
    className="close"
    data-dismiss="alert"
    aria-label="Close"
    onClick={onClick}
   >
    <span aria-hidden="true">&times;</span>
   </button>
  </div>
 );
};

export default Alert;
