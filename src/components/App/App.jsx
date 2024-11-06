
import { UseAuth } from "../useHook/Context";
import DashBoard from "../DashBoard/DashBoard";
import AddProduct from "../form/addProduct";
import Contact from "../Page/contact";
import Page from "../Page/Page";
import Product from "../Page/Product";
import Form from "../form/Form";

import { Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
    const { isLogin } = UseAuth();
    console.log("isLogin:", isLogin);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/" element={<Page />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/login" element={<Form/>} />
            </Routes>
            {
            isLogin && (
                <Routes>
                    <Route path="/DashBoard" element={<DashBoard />} />
                    <Route path="/AddProduct" element={<AddProduct/>} />
                </Routes>
            )}


        </BrowserRouter>

    )
}
export default App;