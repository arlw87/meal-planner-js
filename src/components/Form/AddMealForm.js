import TextInput from "./TextInput";
import SelectionInput from "./SelectionInput";
import style from "./AddMealForm.module.css";
import { useState } from "react";

const AddMealForm = (props) => {
  //state for inputs
  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState("");

  const mealUpdate = (mealName) => {
    //create a meal Object
    setMealName(mealName);
  };

  const mealTypeUpdate = (mealType) => {
    setMealType(mealType);
    console.log(mealType);
  };

  //props.addMeal(meal);
  const onSubmitHandler = (event) => {
    event.preventDefault();

    //create meal Object
    const mealObject = {
      id: Math.floor(Math.random() * 10001),
      name: mealName,
      type: mealType,
    };
    props.addMeal(mealObject);
    props.toggleModal();
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      <h1>Enter meal details</h1>
      <TextInput
        labelName={"Meal Name"}
        value={mealName}
        onChange={mealUpdate}
        className={style.formControl}
      />
      <SelectionInput
        className={style.formControl}
        label="Category"
        value={mealType}
        onChange={mealTypeUpdate}
      ></SelectionInput>
      <button className={style.formControl} type="submit">
        Add Meal
      </button>
    </form>
  );
};

export default AddMealForm;
