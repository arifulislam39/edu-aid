import CollegeCards from "../CollegeCards/CollegeCards";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import ResearchPaper from "../ResearchPaper.jsx/ResearchPaper";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <CollegeCards></CollegeCards>
            <CollegeGallery></CollegeGallery>
            <ResearchPaper></ResearchPaper>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;