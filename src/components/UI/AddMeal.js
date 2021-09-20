import style from "./AddMeal.module.css";
import FlexWrapper from "./FlexWrapper";
import AddMealButton from "../main/AddMealButton";

const AddMeal = (props) => {
  let sizeBig = props.size;

  return (
    <FlexWrapper flexRow={true}>
      <h1 className={`${style.title} ${sizeBig ? style.large : style.small}`}>
        Add A Meal
      </h1>
      <AddMealButton
        addMealHandler={props.displayModal}
        size={sizeBig}
      ></AddMealButton>
    </FlexWrapper>
  );
};

export default AddMeal;
