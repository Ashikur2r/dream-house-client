
import { Button, Navbar } from "keep-react";
import {  SignIn } from "phosphor-react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div >
            <Navbar fluid={true}>
                <Navbar.Container className="flex  items-center justify-between">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8"
                    >
                        <Link className="px-4 text-lg" to={'/'}>Home</Link>
                        <Link className="px-4 text-lg" to={'/apartment'}>Apartment</Link>
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
                            <Link>Home</Link>
                            <Link>Apartment</Link>

                        </Navbar.Container>
                    </Navbar.Collapse>

                    <Navbar.Container className="flex items-center gap-3">
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-5"
                        >
                            {/* <Navbar.Link
                                icon={<MagnifyingGlass size={20} color="#444" />}
                                iconAnimation={false}
                            />
                            <Navbar.Link
                                icon={<User size={20} color="#444" />}
                                iconAnimation={false}
                            />
                            <Navbar.Link
                                icon={<Heart size={20} color="#444" />}
                                iconAnimation={false}
                            /> */}
                        </Navbar.Container>

                        {/* <Button size="xs" variant="outline">
                            <span>
                                <ShoppingCart size={20} color="#444" />
                            </span>
                            <span className="ml-1 text-metal-600">Cart $0.00</span>
                        </Button> */}
                        <Button>
                            <SignIn size={20} className="mr-1.5" />
                            Sign In
                        </Button>
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default Header;