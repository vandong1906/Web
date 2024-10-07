import { ThemeContext } from "../../context/context";
import Brand from "../Brand/brand";
import ListBrand from "../Brand/ListBrand";
import Header from "../Header/Header";
import Page from "../Page/Page";
import { clsx } from 'clsx';
import { useState } from "react";
import Product from "../Page/Product";
function App() {
    const products = [
        {
            id: 1,
            brand: "Giày Tennis chính hãng",
            title: "SaleMua ngay các phiển bản giày Pickedball và Tennis mới nhất đến từ các thương hiệu Asics, Nike, Lacoste,… chính hãng 2024",
            product: [
                {
                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                },
                {

                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                },  {
                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                },
                {

                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                }
                ,  {
                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                },
                {

                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                }
                
                
             
            ]
        },
        {
            id: 2,
            brand: "Sneake",
            title: "Sale",
            product: [
                {
                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                },
                {
                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                }
            ]
        }
    ]

    const [theme, setTheme] = useState('black   ');
    const NameUser = {
        Name: 'vandong'
    }
    return (
        <ThemeContext.Provider value={theme}>
            <Header NameUser={NameUser.Name} />
            <Page/>
            <Brand /> 
            <ListBrand children={products}/>  
        </ThemeContext.Provider>
    )




}

export default App;