import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./components/nav/navBar";
import Home from "./components/pages/Home";
import Signin from "./components/pages/sign_in";
import Login from "./components/pages/login";
import List from "./components/pages/list"
import {Provider} from "react-redux";
import {store} from "./redux/store";
function App() {
  return (
    <>
        <Provider store={store}>

    <Router>
    <NavBar />
    <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/list" element={<List />} />



    </Routes>
    </Router>
    </Provider>

    </>
  );
}

export default App;
