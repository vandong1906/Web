import { useEffect, useState } from "react";

import SlidePage from "../../components/Swiper/SlidePage";
import fetchData from "components/axiosFetch/fetchData";
import NavBar from "components/NavBar/Navbar";
import ListProduct from "components/Brand/ListProduct";

function Page() {
   
    const [typebrand, setType] = useState('');
    const [data, setData] = useState(null);
    const [product, setProduct] = useState(null);
  
    const handlerButton = (nameBrand) => {
        setType(nameBrand);
    }

    useEffect(() => {
        const handlerData = async () => {
            const respon = await fetchData.getData(process.env.REACT_APP_APi_URL + '/product');
            setProduct(respon);
        }
        handlerData();
    }, []);
    console.log(product);
    useEffect(() => {
        const handlerData = async () => {
            const respon = await fetchData.getData(process.env.REACT_APP_APi_URL + '/brand');
            setData(respon);
        }
        handlerData();
    }, [])
    const SlidePageSwipper = [{

        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/AJ1_Yellow_Ochre_Release_DayPrim.webp"
    }, {

        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp"
    }]
    return <>

        <NavBar />
        <div className="Slide_Page mt-1 w-full">
            <SlidePage children={SlidePageSwipper} />
        </div>
        {/*Galaryy */}
        <section className="bg-white py-10 md:py-16" >

            <div className="container max-w-screen-xl mx-auto px-4 ">
                <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">Our Product</h1>
                <div className="max-md:hidden md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12">
                    {
                       data && (
                            data.map((brand) => (
                                <button type="button" className="px-6 py-2 ahover text-gray-900 font-normal text-xl rounded-lg   transition ease-in-out duration-500 " key={brand.Brand_id} onClick={() => {
                                    handlerButton(brand.Brand_id)
                                }}>{brand.Brand_Name}</button>
                            ))
                        )
                    }
                </div>
            </div>

        </section>
        {
            product ?
            (<ListProduct brand={typebrand} products={product} />) : (<div>is loading ...................</div>)

        }
    </>


}

export default Page;