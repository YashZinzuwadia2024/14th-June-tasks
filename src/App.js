import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Form from "./components/Form";
import ChildStateControl from "./components/ChildStateControl";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product-list" element={<ProductList />}></Route>
                <Route path="/form-validation" element={<Form />}></Route>
                <Route path="/child-component-state-control" element={<ChildStateControl />}></Route>
            </Routes>
        </div>
    )
}

export default App;
