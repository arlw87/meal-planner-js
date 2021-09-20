import AddMeal from "./components/UI/AddMeal";
import Page from "./components/UI/Page";
import FlexWrapper from "./components/UI/FlexWrapper";
import Meals from "./components/main/Meals";
import { useState } from "react";
import ModalWrapper from "./components/Modal/ModalWrapper";
import style from "./App.module.css";

function App() {
  const [isModalDisplay, toggleModal] = useState(false);
  const [meals, setMeals] = useState([]);

  const displayModal = (event) => {
    toggleModal((prev) => !prev);
  };

  const addMealHandler = (meal) => {
    setMeals((prev) => [...prev, meal]);
  };

  const removeMeal = (id) => {
    setMeals((prev) => prev.filter((e) => e.id !== id));
  };

  //get size for Add Meal UI
  let mealListEmpty = true;
  if (meals.length > 0) {
    mealListEmpty = false;
  }

  return (
    <Page>
      <div
        className={`${style.container} ${
          mealListEmpty ? style.center : style.top
        }`}
      >
        <AddMeal displayModal={displayModal} size={mealListEmpty}></AddMeal>
        <Meals list={meals} deleteMeal={removeMeal}></Meals>
      </div>
      <ModalWrapper
        isModalDisplay={isModalDisplay}
        displayModal={displayModal}
        addMealHandler={addMealHandler}
      ></ModalWrapper>
    </Page>
  );
}

export default App;
