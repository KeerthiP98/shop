import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./components/nav/navBar";
import Home from "./components/pages/Home";
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
      



    </Routes>
    </Router>
    </Provider>

    </>
  );
}

export default App;
