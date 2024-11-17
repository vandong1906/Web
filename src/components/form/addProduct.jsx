import { useEffect, useState } from "react";
import fetchData from "../axiosFetch/fetchData";

import { Link } from 'react-router-dom';
import Notice from "./Notice";
function AddProduct() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);
    const [brand, setBrand] = useState([]);
    const [brands, setBrands] = useState(null);
    const [status, setStatus] = useState(false);

    /* this is a handle Brand */
    useEffect(() => {
        const handleBrand = async () => {
            console.log(process.env.REACT_APP_APi_URL + '/brand');
            const response = await fetchData.getData(process.env.REACT_APP_APi_URL + '/brand');
            setBrands(response);
        }
        handleBrand();
    }, []);
    function handleProduct() {
        if (isNaN(number)) {
            setMessage('invalid Number');
            setStatus(true);
        }
        else{
            const formData = new FormData();
            formData.append('product_Name', name);
            formData.append('number', number);
            formData.append('Brand_id', brand);
            formData.append('file', file);
            console.log(formData);
            const handleProducts = async () => {
                const response = await fetchData.post(`${process.env.REACT_APP_APi_URL}/product`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                console.log('Before setting status:', status);
                console.log(response);
                if (response.status === 200) {
                    setMessage('add successfully');
                    setStatus(true);
                }
            };
            handleProducts();
        }
        

    }
    return <>
        <div className="mt-8 ml-8 border-2 w-28 text-center rounded hover:bg-orange-300">
            <Link to='/' className="underline w-full" >Go back</Link>
        </div>
        <div className="m-auto  w-1/2 p-10">
            <div class="md:block bg-white xl:relative px-6 py-3 rounded-3xl">
                <div class="py-3">
                    <h3 class="font-semibold text-gray-900 text-3xl">Add a Product </h3>
                </div>

                <div class="py-3">
                    <input type="text" placeholder="Name Product" class="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>

                <div class="py-3">
                    <input type="text" placeholder="Number" class="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none" onChange={(e) => {

                        setNumber(e.target.value);
                    }} />

                </div>

                <div class="py-3 relative">
                    <select onChange={(e) => {
                        setBrand(e.target.value)
                    }} name="" id="" className="border-2 w-full rounded-full h-11 text-center bg-white/75">
                        <option value="" selected disabled hidden>Choose here</option>
                        {
                            brands && (

                                brands.map((brand) => (
                                    <option value={brand.Brand_id} className="rounded-full">{brand.Brand_Name}</option>
                                ))

                            )


                        }

                    </select>
                </div>
                <div class="py-3 relative">
                    <input type="file" name="file" id="" className="" onChange={(e) => {
                        setFile(e.target.files[0]);
                    }} />
                </div>

                <div class="py-3">
                    <button type='submit' className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500" onClick={handleProduct}> ADD</button>
                </div>
            </div>


        </div>
        {status && (
            <Notice
                message={message}
                duration={5000}
                onClose={() => setStatus(false)}
            />
        )}
    </>
}

export default AddProduct;