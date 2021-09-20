import Meal from "../main/Meal";
import style from "./Meals.module.css";

const Meals = (props) => {
  console.log(props.list);

  return (
    <ul className={style.list}>
      {props.list.map((e) => (
        <Meal
          name={e.name}
          type={"food"}
          price={"£2.30"}
          key={e.id}
          id={e.id}
          deleteMeal={props.deleteMeal}
        ></Meal>
      ))}
    </ul>
  );
};

export default Meals;
