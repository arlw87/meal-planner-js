import TextInput from "./TextInput";
import style from "./AddMealForm.module.css";

const AddMealForm = () => {
  return (
    <form className={style.center}>
      <h1>Enter meal details</h1>
      <TextInput labelName={"Meal Name"} />
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default AddMealForm;
