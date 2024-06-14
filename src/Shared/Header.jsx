
import { Button, Navbar } from "keep-react";
import { Heart, SignIn, User } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () =>{
        logout()
        .then(()=>{})
        .catch(console.error())
    }
    return (
        <div >
            <Navbar fluid={true}>
                <Navbar.Container className="flex  items-center justify-between">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8"
                    >
                        <Link className="px-4 text-lg" to={'/'}>Home</Link>
                        <Link className="px-4 text-lg" to={'/apartments'}>Apartment</Link>
                        {/* <Navbar.Link className="px-4" linkName="Home" />
                        <Navbar.Link linkName="Appartments" /> */}
                    </Navbar.Container>
                    <Navbar.Brand className="flex justify-center items-center gap-5">
                        <img className="h-20 w-20" src="/image/Logo/dream logo.jpg" alt="" />
                        <h3 className="text-2xl font-bold font-robotoSerif">Dream House</h3>
                    </Navbar.Brand>

                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            {/* <Navbar.Link linkName="Home" />
                            <Navbar.Link linkName="Appartments" /> */}
                            <Link className="px-4 text-lg" to={'/'}>Home</Link>
                            <Link className="px-4 text-lg" to={'/apartments'}>Apartment</Link>

                        </Navbar.Container>
                    </Navbar.Collapse>

                    <Navbar.Container className="flex items-center gap-3">
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-5 px-1"
                        >
                            
                            <Navbar.Link
                                icon={<User size={20} color="#444" />}
                                iconAnimation={false}
                            />
                            <Navbar.Link
                                icon={<Heart size={20} color="#444" />}
                                iconAnimation={false}
                            />
                            
                        </Navbar.Container>

                        {/* <Button size="xs" variant="outline">
                            <span>
                                <ShoppingCart size={20} color="#444" />
                            </span>
                            <span className="ml-1 text-metal-600">Cart $0.00</span>
                        </Button> */}
                        {
                            user ? <>
                            <Link to={'login'}><Button onClick={handleLogOut} size="xs">
                                    <SignIn size={20} className="mr-1.5" />
                                    Log Out
                                </Button> </Link>
                            </> : <>
                                <Link to={'login'}><Button size="xs">
                                    <SignIn size={20} className="mr-1.5" />
                                    Sign In
                                </Button> </Link>
                            </>
                        }


                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default Header;