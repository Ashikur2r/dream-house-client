import { Outlet, useLocation } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer/Footer";



const Main = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter= location.pathname.includes('login') ||location.pathname.includes('signUp')
    return (
        <div className="font-inter">
            <Header></Header>
            <Outlet></Outlet>
            { noHeaderFooter || <div className="bg-cover " style={{backgroundImage : `url(https://i.ibb.co/Z1C3L6p/footer-background.jpg)`}} >
                <Footer></Footer>
                
            </div>}
        </div>
    );
};

export default Main;