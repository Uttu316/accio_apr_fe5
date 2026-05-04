import "./practice.css";
import Banner from "../../components/Banner";
import Counter from "../../components/counter";
import Students from "../../components/students";
import TodoList from "../../components/todolist";
import PageWrapper from "../../components/pageWrapper";

function PracticePage() {
  let fnName = "Utkarsh";
  let lname = "Gupta";
  const getUserName = () => {
    return "aman";
  };
  return (
    <PageWrapper title={"My App"}>
      <Students />
      <Counter />
      <TodoList />
      <Banner />
    </PageWrapper>
  );
}

export default PracticePage;
