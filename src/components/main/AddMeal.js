import styles from "./AddMeal.module.css";

const AddMeal = (props) => {
  const addHandler = (event) => {
    props.addMealHandler();
  };

  return (
    <button onClick={addHandler} className={styles.button}>
      +
    </button>
  );
};

export default AddMeal;
