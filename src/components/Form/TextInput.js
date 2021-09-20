import style from "./TextInput.module.css";

const TextInput = (props) => {
  const updateValue = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={style.TextInput}>
      <label>{props.labelName}</label>
      <input type="text" value={props.value} onChange={updateValue}></input>
    </div>
  );
};

export default TextInput;

// value={mealName}
// onChange={mealUpdate}
