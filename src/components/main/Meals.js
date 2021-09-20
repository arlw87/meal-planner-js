import Meal from "../main/Meal";
import style from "./Meals.module.css";

const Meals = (props) => {
  console.log(props.list);

  return (
    <ul className={style.list}>
      {props.list.map((e) => (
        <Meal
          name={e.name}
          type={e.type}
          key={e.id}
          id={e.id}
          deleteMeal={props.deleteMeal}
        ></Meal>
      ))}
    </ul>
  );
};

export default Meals;
