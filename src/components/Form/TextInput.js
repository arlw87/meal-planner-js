import style from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <div className={style.TextInput}>
      <label>{props.labelName}</label>
      <input type="text"></input>
    </div>
  );
};

export default TextInput;
