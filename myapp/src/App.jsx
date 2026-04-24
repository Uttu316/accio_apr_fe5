import "./App.css";
import Banner from "./components/Banner";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import Students from "./components/students";
import TodoList from "./components/todolist";

function App() {
  let fnName = "Utkarsh";
  let lname = "Gupta";
  const getUserName = () => {
    return "aman";
  };
  return (
    <div>
      <Header title={"My App"} />
      <Students />
      <Counter />
      <TodoList />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
