import style from "./Modal.module.css";

const Modal = (props) => {
  if (props.showModal) {
    return <div className={style.modal}>{props.children}</div>;
  }
  return null;
};

export default Modal;
