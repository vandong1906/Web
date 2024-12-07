import SlidePage from "../Swiper/SlidePage";

function Page() {
    const SlidePageSwipper = [{
        title: "slide1",
        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/AJ1_Yellow_Ochre_Release_DayPrim.webp"
    }, {
        title: "slide2",
        imgUrl: "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp"
    }]
    return (
        <div className="Slide_Page mt-5 ">
            <SlidePage children={SlidePageSwipper} />
        </div>
    );
}

export default Page;