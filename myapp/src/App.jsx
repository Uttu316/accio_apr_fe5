import "./App.css";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import Students from "./components/students";

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
      <Footer />
    </div>
  );
}

export default App;
