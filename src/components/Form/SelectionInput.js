import styles from "./SelectionInput.module.css";

const SelectionInput = (props) => {
  const updateSelection = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={`${styles.container} ${props.className}`}>
      <label>{props.label}</label>
      <select
        name="foodType"
        id="foodType"
        onChange={updateSelection}
        defaultValue={props.value}
      >
        <option value=""></option>
        <option value="Meat">Meat</option>
        <option value="Fish">Fish</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Vegan">Vegan</option>
      </select>
    </div>
  );
};

export default SelectionInput;
