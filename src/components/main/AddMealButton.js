import styles from "./AddMealButton.module.css";

const AddMealButton = (props) => {
  const addHandler = (event) => {
    props.addMealHandler();
  };

  return (
    <button
      onClick={addHandler}
      className={`${styles.button} ${props.size ? styles.large : styles.small}`}
    >
      +
    </button>
  );
};

export default AddMealButton;
