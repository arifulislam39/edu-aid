
import img1 from "../../../assets/gallery1.jpg"
import img2 from "../../../assets/gallery2.jpg"
import img3 from "../../../assets/gallery3.jpg"
import img4 from "../../../assets/gallery4.jpeg"
import img5 from "../../../assets/gallery5.jpg"
import img6 from "../../../assets/gallery6.jpg"
const CollegeGallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 ">
           
            <img className="w-full h-96 rounded-2xl" src={img1} alt="" />
            <img className="w-full h-96 rounded-2xl" src={img2} alt="" />
            <img className="w-full h-96 rounded-2xl" src={img3} alt="" />
            <img className="w-full h-96 rounded-2xl" src={img4} alt="" />
            <img className="w-full h-96 rounded-2xl" src={img5} alt="" />
            <img className="w-full h-96 rounded-2xl" src={img6} alt="" />
           
        </div>
    );
};

export default CollegeGallery;