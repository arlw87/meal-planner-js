import Card from "../UI/Card";
import style from "./Meal.module.css";
const Meal = (props) => {
  const deleteHandler = (event) => {
    alert("delete me");
  };

  return (
    <li className={style.mealListItem}>
      <Card class={style.mealCard}>
        <h3 className={style.mealTitle}>{props.name}</h3>
        <hr style={{ width: "80%", borderBottom: "1px,solid,black" }} />
        <div className={style.mealInfoContainer}>
          <h3>{props.type}</h3>
          <h3>{props.price}</h3>
        </div>
        <button onClick={deleteHandler}>Delete</button>
      </Card>
    </li>
  );
};

export default Meal;
