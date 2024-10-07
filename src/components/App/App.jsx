import { ThemeContext } from "../../context/context";

import Page from "../Page/Page";
import { clsx } from 'clsx';
import { useState } from "react";
import Product from "../Page/Product";
import { Route, Routes } from "react-router-dom";
function App() {
 const [theme,settheme]=useState('Dark')
    return (
        <ThemeContext.Provider value={theme}>
            <Routes>
                <Route path="/product" element={<Product/>}/>
                <Route path="/" element={<Page/>}/>
            </Routes>
          
        </ThemeContext.Provider>
    )




}

export default App;