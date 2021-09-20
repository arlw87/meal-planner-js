import Modal from "./Modal";
import PopUp from "../UI/PopUp";
import AddMealForm from "../Form/AddMealForm";

const ModalWrapper = (props) => {
  return (
    <Modal showModal={props.isModalDisplay}>
      <PopUp toggleModal={props.displayModal}>
        <AddMealForm
          addMeal={props.addMealHandler}
          toggleModal={props.displayModal}
        ></AddMealForm>
      </PopUp>
    </Modal>
  );
};

export default ModalWrapper;
