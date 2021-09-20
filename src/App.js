import "./App.css";
import AddMeal from "./components/main/AddMeal";
import Page from "./components/UI/Page";
import FlexWrapper from "./components/UI/FlexWrapper";
import Modal from "./components/Modal/Modal";
import PopUp from "./components/UI/PopUp";
import AddMealForm from "./components/Form/AddMealForm";
import { useState } from "react";

function App() {
  const [isModalDisplay, toggleModal] = useState(false);

  const displayModal = (event) => {
    toggleModal((prev) => !prev);
  };

  return (
    <Page>
      <FlexWrapper>
        <h1>Add A Meal</h1>
        <AddMeal addMealHandler={displayModal}></AddMeal>
      </FlexWrapper>
      <Modal showModal={isModalDisplay}>
        <PopUp toggleModal={displayModal}>
          <AddMealForm></AddMealForm>
        </PopUp>
      </Modal>
    </Page>
  );
}

export default App;
