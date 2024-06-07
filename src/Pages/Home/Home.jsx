import Details from "../../Component/Details/Details";
import Facilities from "../../Component/Facilities/Facilities";
import HeroBanner from "../../Component/HeroBanner/HeroBanner";


const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-50 from-10% via-yellow-50 via-60% to-indigo-100 to-100%">
                <HeroBanner></HeroBanner>
            </div>
            <Details></Details>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;