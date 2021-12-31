import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Home />} />
    </div>
  );
};

export default App;
