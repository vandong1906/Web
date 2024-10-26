import Brand from "../Brand/brand";
import AddProduct from "../form/addProduct";
import Form from "../form/Form";

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
        <div className="Slide_Page mt-1 w-full">
            <SlidePage children={SlidePageSwipper} />
        </div>
        {/*Galaryy */}
        <section class="bg-white py-10 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">
                <h1 class="font-semibold text-gray-900 text-4xl text-center mb-10">Our Gallery</h1>
                <div class="md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12">
                    <a href="#" class="px-6 py-2 bg-green-800 text-white font-semibold text-xl rounded-lg hover:bg-green-600 transition ease-in-out duration-500">All</a>
                    <a href="#" class="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500">Exterior</a>
                    <a href="#" class="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500">Interior</a>
                    <a href="#" class="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500">Building</a>
                </div>

                <div class="flex space-x-4 md:space-x-6 lg:space-x-8">
                </div>
            </div>
        </section>
    </>


}

export default Page;