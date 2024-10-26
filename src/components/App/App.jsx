
import DashBoard from "../DashBoard/DashBoard";
import Contact from "../Page/contact";
import Page from "../Page/Page";
import Product from "../Page/Product";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/product" element={<Product />} />
                    <Route path="/" element={<Page />} />
                    <Route path="/DashBoard" element={<DashBoard/>} />
                    <Route path="/Contact" element={<Contact/>} />
                </Routes>
       
        </BrowserRouter>

    )
}
export default App;