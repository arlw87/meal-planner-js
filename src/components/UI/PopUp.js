import style from "./PopUp.module.css";

const PopUp = (props) => {
  const closeFormHandle = (event) => {
    props.toggleModal();
  };

  return (
    <div className={style.wrapper}>
      <button className={style.closeButton} onClick={closeFormHandle}>
        X
      </button>
      {props.children}
    </div>
  );
};

export default PopUp;
