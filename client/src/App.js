import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetail from "./Components/Products/ProductDetail";


function App() {
 const element = useRoutes([
  {path: "/", element: <Home />},
  {path: "/product-detail/:id", element: <ProductDetail/>}
 ]);
 return element;
};

export default App;
