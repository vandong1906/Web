import { AuthProvider } from "../../context/context";
import Page from "../Page/Page";
import Product from "../Page/Product";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <AuthProvider>

                <Routes>
                    <Route path="/product" element={<Product />} />
                    <Route path="/" element={<Page />} />
                </Routes>
        </AuthProvider>
        </BrowserRouter>

    )
}
export default App;