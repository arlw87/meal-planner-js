import style from "./FlexWrapper.module.css";

const FlexWrapper = (props) => {
  return (
    <div className={props.flexRow ? style.flexRow : style.flexColumn}>
      {props.children}
    </div>
  );
};

export default FlexWrapper;
