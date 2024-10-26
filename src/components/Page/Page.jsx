import Brand from "../Brand/brand";
import ListBrand from "../Brand/ListBrand";
import Header from "../Header/Header";
import SlidePage from "../Swiper/SlidePage";

import { useState, } from "react"
function Page() {
 
    const SlidePageSwipper = [{

        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/AJ1_Yellow_Ochre_Release_DayPrim.webp"
    }, {

        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp"
    }]
    return <>

        <Header />
        <div className="Slide_Page mt-1 ">
            <SlidePage children={SlidePageSwipper} />
        </div>
        <div className="grid grid-cols-4 ">
            <Brand />
        </div>
      

    </>


}

export default Page;