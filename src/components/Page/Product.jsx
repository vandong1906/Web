function Product() {

    return (<div className="overview-product grid grid-cols-2 gap-32 m-6">

        <div className="overview-left">
            <div>
                <img src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/dr6191-101_blanc_1.png" alt="" />
            </div>
            <div className="flex gap-5 mt-5">
                <button type="button" className="h-32 bg-blue-400 rounded w-full">Add to Cart</button>
                <button type="button" className="h-32 bg-blue-400 rounded w-full">Buy Now</button>
            </div>
        </div>
        <div className="overview-right border-1">
<h1 className="title_product">Day la ten cua san pham </h1>
        </div>
    </div>);
}

export default Product;