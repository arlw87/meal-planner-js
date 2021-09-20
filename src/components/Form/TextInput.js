import style from "./TextInput.module.css";

const TextInput = (props) => {
  const updateValue = (event) => {
    props.onChange(event.target.value);
  };

  console.log("isMealNameError:  ", props.error);

  return (
    <div className={`${style.TextInput} ${props.className}`}>
      <label className={props.error && style.error}>{props.labelName}</label>
      <input
        type="text"
        value={props.value}
        onChange={updateValue}
        className={props.error && style.error}
      ></input>
    </div>
  );
};

export default TextInput;

// value={mealName}
// onChange={mealUpdate}
