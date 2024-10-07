import Brand from "../Brand/brand";
import ListBrand from "../Brand/ListBrand";
import Header from "../Header/Header";
import SlidePage from "../Swiper/SlidePage";

import { useState, } from "react"
function Page() {
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
                }, {
                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                },
                {

                    imageUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png",
                    title: "Sneaker",
                    about: ""
                }
                , {
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

    const NameUser = {
        Name: 'vandong'
    }
    const SlidePageSwipper = [{

        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/AJ1_Yellow_Ochre_Release_DayPrim.webp"
    }, {

        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp"
    }]
    return <>
        <Header NameUser={NameUser.Name} />
        <div className="Slide_Page mt-1 ">
            <SlidePage children={SlidePageSwipper} />
        </div>
        <Brand />
        <ListBrand children={products} />


    </>


}

export default Page;