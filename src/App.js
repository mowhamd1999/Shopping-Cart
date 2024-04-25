import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Redux
import store from "./Redux/store";
import { Provider } from "react-redux";

//components
import Store from "./Components/Store/Store";
import Header from "./Components/Header/Header";
import Detail from "./Components/Details/Details";
import Shop from "./Components/Shop/Shop";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
