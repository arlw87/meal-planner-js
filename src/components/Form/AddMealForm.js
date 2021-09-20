import TextInput from "./TextInput";
import style from "./AddMealForm.module.css";
import { useState } from "react";

const AddMealForm = (props) => {
  //state for inputs
  const [mealName, setMealName] = useState("");

  const mealUpdate = (mealName) => {
    //create a meal Object
    setMealName(mealName);
  };

  //props.addMeal(meal);
  const onSubmitHandler = (event) => {
    event.preventDefault();

    //create meal Object
    const mealObject = {
      id: Math.floor(Math.random() * 10001),
      name: mealName,
    };
    props.addMeal(mealObject);
    props.toggleModal();
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.center}>
      <h1>Enter meal details</h1>
      <TextInput
        labelName={"Meal Name"}
        value={mealName}
        onChange={mealUpdate}
      />
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default AddMealForm;
