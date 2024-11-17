import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ListProduct({ brand, products }) {
    const [data, setData] = useState(null);
    const [loading, isLoading] = useState(false);
    useEffect(() => {
        setData(products.filter((data) => data.Brand_id === brand));
        isLoading(true);
    }, [brand])

    return (
        <div className={clsx('h-full')}>
            <div className="grid grid-cols-4 gap-24 p-8">
                {
                    loading && (
                        data.map((product) => (
                            <Link to={clsx('/product?product='+product.product_id)}  className="Card text-center h-full" key={product.product_id}>
                                <img src={process.env.REACT_APP_API_IMG + '/uploads/' + product.image_data} alt="" className="w-full h-1/2" />
                                <div className="title">
                                    <span>{product.product_Name}</span>
                                    <h1>{product.number}</h1>
                                    <button type="submit" className="w-full bg-blue-600">Buy</button>
                                </div>
                            </Link>

                        )
                        ))
                }
            </div>

        </div>
    );
}

export default ListProduct;