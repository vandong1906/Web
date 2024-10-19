function CardBrand({children1}) {
    
    return (
        <div className="card" key={children1.brandId}>
            <a href="#">
            <div className="image m-4">
                <img src={children1.imageUrl} alt="" className="" />
            </div>
            </a>
            
            <div className="title mt-4 mb-4 text-center ">
                <h1 className="title-this ">{children1.title}</h1>
                <p className="about-this"> {children1.about} </p>
              
            </div>
            <div>  <button type="button" className="rounded bg-blue-500 w-full h-16 hover:opacity-50">Click Buy Me</button></div>
        </div>
      );
}

export default CardBrand;