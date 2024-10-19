import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import fetchData from "../axiosFetch/fetchData";
import { Buffer } from "buffer";
function Brand() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const HandlerData = async () => {
            const response = await fetchData.getData(process.env.REACT_APP_APi_URL + '/product')
            console.log(response);
            setdata(response);
        }
        HandlerData();
    }, [])

    return <>

        <div className="m-5 border-2 rounded-md ">
            <a href="">

                <div className="img relative ">

                    <button type="button" className="rounded-full bg-blue-600 cursor-pointer h-8 w-8  absolute right-0 -mt-4 mr-3 hover:bg-blue-500" ><ShoppingCartIcon className="" /></button>
                </div>
                <div className="brand p-4 ">
                    <span className="uppercase">Fasion</span> <br></br>
                    <span className="uppercase">channel</span>
                </div>
            </a>
        </div>
        <div>
            {
                data.map((products) =>
                (
                    products.images.map((image) => {
                        // Giả sử image.data là dữ liệu Buffer
                        const base64String = Buffer.from(image.data).toString('base64');
                        const imgSrc = `data:image/jpeg;base64,${base64String}`;
                        return (
                            <img src={imgSrc} alt="#" className="" key={image.id} />
                        );
                    }))
                )
            }
        </div>
    </>





}

export default Brand;