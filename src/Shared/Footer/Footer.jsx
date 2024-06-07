const Footer = () => {
    return (
        <>
            <footer className="text-white max-w-screen-lg mx-auto">
                <div className="container md:px-16 py-12 mx-auto grid md:grid-cols-2 grid-cols-1">
                    {/* logo here  */}
                    <div className=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-indigo-200">
                            <img className="h-10 rounded-full" src="/image/Logo/dream logo.jpg" alt="" />
                            <span className="ml-3 text-3xl">Dream House</span>
                        </a>
                        <p className="mt-2 text-sm text-white">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    {/* ------------  */}
                    <div className="grid  md:grid-cols-2 grid-cols-2 gap-10">
                        
                        <div className=" w-full px-4">
                            <h2 className="title-font font-medium text-yellow-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className=" w-full px-4">
                            <h2 className="title-font font-medium text-yellow-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* ------------------  */}
                
            </footer>
            <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 DreamHouse —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@ashikur2r</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
        </>
    );
};

export default Footer;