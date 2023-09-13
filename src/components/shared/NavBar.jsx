import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
    const imgRef = useRef();
    const navRef = useRef();
    const menuBgRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleCloseMenu = (e) => {
        e.target === menuBgRef.current && setIsMenuOpen(false);
    };

    useEffect(() => {
        const listener = () => {
            if (scrollY > 150) {
                if (window.innerWidth >= 750) {
                    imgRef.current.classList.add("w-[59px]");
                    imgRef.current.classList.add("h-[75px]");
                } else {
                    imgRef.current.classList.add("w-[40px]");
                    imgRef.current.classList.add("h-[50px]");
                }
                imgRef.current.classList.add("translate-y-0");
                imgRef.current.classList.add("bottom-2");
                navRef.current.classList.add("opacity-90");
            } else {
                if (window.innerWidth >= 750) {
                    imgRef.current.classList.remove("w-[59px]");
                    imgRef.current.classList.remove("h-[75px]");
                } else {
                    imgRef.current.classList.remove("w-[40px]");
                    imgRef.current.classList.remove("h-[50px]");
                }
                imgRef.current.classList.remove("translate-y-0");
                imgRef.current.classList.remove("bottom-2");
                navRef.current.classList.remove("opacity-90");
            }
        };

        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);
    }, []);

    return (
        <nav
            ref={navRef}
            className="sticky top-0 left-0 z-20 bg-[rgb(55_0_60)] text-white min-h-[4rem]"
        >
            <ul className="ml-32 flex p-6 font-bold text-xl max-[750px]:hidden">
                <li className="px-3 py-2 ">
                    <Link className="p-2" to="/">
                        Home Page
                    </Link>
                </li>
                <li className="px-3 py-2 ">
                    <Link className="p-2" to="/playerlist">
                        Player List
                    </Link>
                </li>

                <li className="px-3 py-2 ">
                    <Link className="p-2" to="/dreamteam">
                        Dream Team
                    </Link>
                </li>
                <li className="px-3 py-2">
                    <Link className="p-2" to="/stats">
                        Leaders
                    </Link>
                </li>
            </ul>
            <div
                onClick={() => setIsMenuOpen(true)}
                className="absolute top-1/2 right-0 -translate-y-1/2 p-2 cursor-pointer min-[751px]:hidden"
            >
                <GiHamburgerMenu size={"1.5rem"} />
            </div>
            {isMenuOpen && (
                <div
                    ref={menuBgRef}
                    onClick={(e) => handleCloseMenu(e)}
                    className="fixed inset-0 bg-gray-600/40 z-50"
                >
                    <div className="flex items-center justify-center absolute right-0 top-0 w-full h-96 rounded-lg bg-[rgb(55_0_60)] opacity-95 z-50">
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            size={"1.5rem"}
                            className="absolute top-8 right-2 -translate-y-1/2 cursor-pointer"
                        />
                        <ul className="flex flex-col gap-4 flex p-6 font-bold text-lg">
                            <li className="px-3 py-2 ">
                                <Link className="p-2" to="/">
                                    Home Page
                                </Link>
                            </li>
                            <li className="px-3 py-2 ">
                                <Link className="p-2" to="/playerlist">
                                    Player List
                                </Link>
                            </li>

                            <li className="px-3 py-2 ">
                                <Link className="p-2" to="/dreamteam">
                                    Dream Team
                                </Link>
                            </li>
                            <li className="px-3 py-2">
                                <Link className="p-2" to="/stats">
                                    Leaders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <a
                href="/"
                className="absolute w-[88px] h-[112px] bottom-0 left-8 z-30 translate-y-1/2"
                ref={imgRef}
            >
                <img src="https://www.premierleague.com/resources/rebrand/v7.123.11/i/elements/pl-main-logo.png" />
            </a>
        </nav>
    );
}

export default NavBar;
