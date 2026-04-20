import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  let fnName = "Utkarsh";
  let lname = "Gupta";
  const getUserName = () => {
    return "aman";
  };
  return (
    <div>
      <Header />
      <h1 className="main_heading">Hello Welcome to React Session</h1>
      <h2 className="sub_heading">By- {fnName + " " + lname}</h2>
      {2 + 2}
      <b>{getUserName()}</b>

      <ul>{[<li>A</li>, <li>B</li>, <li>C</li>, <li>D</li>]}</ul>
      <h3 className="presentedBy">Presented By- Accio Job</h3>
      <Footer />
    </div>
  );
}

export default App;
