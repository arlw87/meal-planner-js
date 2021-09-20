import style from "./FlexWrapper.module.css";

const FlexWrapper = (props) => {
  return <div className={style.flex}>{props.children}</div>;
};

export default FlexWrapper;
