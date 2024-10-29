

import { UseAuth } from "../Context/Context";
import DashBoard from "../DashBoard/DashBoard";
import Contact from "../Page/contact";
import Page from "../Page/Page";
import Product from "../Page/Product";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    const { isLogin } = UseAuth();
    console.log("isLogin:", isLogin);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/" element={<Page />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            {
            isLogin && (
                <Routes>
                    <Route path="/DashBoard" element={<DashBoard />} />
                </Routes>
            )}


        </BrowserRouter>

    )
}
export default App;