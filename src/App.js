import "./App.css";
import AddMeal from "./components/main/AddMeal";
import Page from "./components/UI/Page";
import FlexWrapper from "./components/UI/FlexWrapper";

function App() {
  return (
    <Page>
      <FlexWrapper>
        <h1>Add A Meal</h1>
        <AddMeal></AddMeal>
      </FlexWrapper>
    </Page>
  );
}

export default App;
