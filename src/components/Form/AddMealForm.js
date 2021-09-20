import TextInput from "./TextInput";
import SelectionInput from "./SelectionInput";
import style from "./AddMealForm.module.css";
import { useState } from "react";

const AddMealForm = (props) => {
  //state for inputs
  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState("");
  const [isMealNameError, setMealNameError] = useState(false);
  const [isMealTypeError, setMealTypeError] = useState(false);

  const mealUpdate = (mealName) => {
    //create a meal Object
    setMealName(mealName);
    if (mealName.trim().length > 0) {
      setMealNameError(false);
    }
  };

  const mealTypeUpdate = (mealType) => {
    setMealType(mealType);
    if (mealType.trim().length > 0) {
      setMealTypeError(false);
    }
  };

  //props.addMeal(meal);
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (mealName.trim().length === 0) {
      setMealNameError(true);
      if (mealType === "") {
        setMealTypeError(true);
        return;
      }
      return;
    }

    if (mealType === "") {
      setMealTypeError(true);
      return;
    }

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
        error={isMealNameError}
      />
      <SelectionInput
        className={style.formControl}
        label="Category"
        value={mealType}
        onChange={mealTypeUpdate}
        error={isMealTypeError}
      ></SelectionInput>
      <button className={style.formControl} type="submit">
        Add Meal
      </button>
    </form>
  );
};

export default AddMealForm;
