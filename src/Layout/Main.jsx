import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer/Footer";



const Main = () => {
    return (
        <div className="font-inter">
            <Header></Header>
            <Outlet></Outlet>
            <div className="bg-cover " style={{backgroundImage : `url(https://i.ibb.co/Z1C3L6p/footer-background.jpg)`}} >
                <Footer></Footer>
                
            </div>
        </div>
    );
};

export default Main;