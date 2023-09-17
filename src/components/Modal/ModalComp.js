import "./Modal.css";

const ModalComp = ({ show, children }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
};
export default ModalComp;
