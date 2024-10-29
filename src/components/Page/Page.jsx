import { lazy, Suspense, useState } from "react";
import Brand from "../Brand/brand";
import AddProduct from "../form/addProduct";
import Form from "../form/Form";

import Header from "../Header/Header";
import SlidePage from "../Swiper/SlidePage";
import Product from "./Product";
import clsx from "clsx";
import { Navigate } from "react-router-dom";

const ListProduct = lazy(() => import('../Brand/ListProduct'));
function Page() {

    const [isOpen, setOpen] = useState(false);
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
        <section className="bg-white py-10 md:py-16" >

            <div className="container max-w-screen-xl mx-auto px-4 ">
                <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">Our Product</h1>
                <div className="max-md:hidden md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12">
                    <a href="#item1" onClick={() => {
                        setOpen(!isOpen)
                    }} className="px-6 py-2 ahover text-gray-900  font-semibold text-xl rounded-lg transition ease-in-out duration-500 relative">All </a>
                    <button type="button" className="px-6 py-2 ahover text-gray-900 font-normal text-xl rounded-lg  transition ease-in-out duration-500 ">Exterior</button>
                    <button type="button" className="px-6 py-2 ahover text-gray-900 font-normal text-xl rounded-lg  transition ease-in-out duration-500 ">Interior</button>
                    <button type="button" className="px-6 py-2 ahover text-gray-900 font-normal text-xl rounded-lg   transition ease-in-out duration-500 ">Building</button>

                </div>
            </div>

        </section>

        {
            isOpen && <Suspense fallback={<div>Loading...</div>}>
                <ListProduct />
            </Suspense>
        }




    </>


}

export default Page;