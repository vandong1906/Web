import CardBrand from "../Card/Card-Brand";

function ListBrand({ children }) {
    return (
        <div className="border-spacing-4 ">
            {children.map((brand) => (
                <div key={brand.id} className="ml-4 border-2 mb-5">
                    <div className="title  m-8 p-8 ">
                        <h1>{brand.brand}<br/></h1>
                        <h3>{brand.title}</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-24 gap-y-24 m-8 p-8">
                        {
                            brand.product.map((products) => (
                                <CardBrand brandKey={brand.id} children1={products} />
                            ))
                        }
                    </div>
                </div>

            ))}
        </div>

    );
}

export default ListBrand;