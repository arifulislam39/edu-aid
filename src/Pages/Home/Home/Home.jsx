import CollegeCards from "../CollegeCards/CollegeCards";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import Header from "../Header/Header";
import ResearchPaper from "../ResearchPaper.jsx/ResearchPaper";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CollegeCards></CollegeCards>
            <CollegeGallery></CollegeGallery>
            <ResearchPaper></ResearchPaper>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;