import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/register" component={SignUp} exact />
      <Route path="/login" component={Login} exact />
    </div>
  );
}

export default App;
