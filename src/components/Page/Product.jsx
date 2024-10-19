import ListBrand from "../Brand/ListBrand";
import CardBrand from "../Card/Card-Brand";
import Header from "../Header/Header";

function Product() {
    const product = [
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
    return <>
        <Header />
        <div className="border-2 h-auto">
            <div className="overview-product grid grid-cols-2 gap-32 m-6">

                <div className="overview-left border-2 p-4">
                    <div>
                        <img src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png" alt="" className="w-3/5 " />
                    </div>
                    <div className="flex gap-5 mt-5">
                        <button type="button" className="h-24 bg-blue-400 rounded w-full">Add to Cart</button>
                        <button type="button" className="h-24 bg-blue-400 rounded w-full">Buy Now</button>
                    </div>
                </div>
                <div className="overview-right ">
                    <h1 className="title_product">Day la ten cua san pham </h1>
                </div>
            </div>

        </div>
        <div className="Diff-card grid-cols-4 grid gap-3">
            {
                product.map((products) => (
                   <ListBrand children={products}/>
                ))
            }

        </div>
    </>

}

export default Product;