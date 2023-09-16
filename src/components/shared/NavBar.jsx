import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

function NavBar() {
    const imgRef = useRef();
    const navRef = useRef();
    const menuBgRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
    const handleCloseMenu = (e) => {
        e.target === menuBgRef.current && setIsMenuOpen(false);
        !e.target.closest(".group") && setIsHomeMenuOpen(false);
        e.target.closest(".group-ul") &&
            !e.target.closest(".group") &&
            setIsMenuOpen(false);
    };

    useEffect(() => {
        const listener = () => {
            if (scrollY > 150) {
                if (window.innerWidth > 750) {
                    imgRef.current.classList.add("!w-[59px]");
                    imgRef.current.classList.add("!h-[75px]");
                } else {
                    imgRef.current.classList.add("!w-[40px]");
                    imgRef.current.classList.add("!h-[50px]");
                }
                imgRef.current.classList.add("!translate-y-0");
                imgRef.current.classList.add("!bottom-2");
            } else {
                if (window.innerWidth >= 750) {
                    imgRef.current.classList.remove("!w-[59px]");
                    imgRef.current.classList.remove("!h-[75px]");
                } else {
                    imgRef.current.classList.remove("!w-[40px]");
                    imgRef.current.classList.remove("!h-[50px]");
                }
                imgRef.current.classList.remove("!translate-y-0");
                imgRef.current.classList.remove("!bottom-2");
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
            <ul className="ml-28 flex items-center px-6 font-bold text-xl max-[750px]:hidden">
                <li className="relative px-3 py-8 group">
                    <div className="flex items-center gap-1">
                        <Link to="/">Home Page</Link>
                        <GoTriangleDown className="mt-1" size={"1rem"} />
                    </div>
                    <div className="absolute font-semibold left-1/2 top-[5.75rem] duration-200 scale-0 origin-top -translate-x-1/2 w-44 bg-[rgb(150_60_255)] text-sm p-4 shadow-lg invisible group-hover:visible group-hover:scale-100 before:absolute before:border-8 before:left-1/2 before:-translate-x-1/2 before:top-[-15px] before:border-transparent before:border-b-[rgb(150_60_255)]">
                        <ul className="flex flex-col gap-1 text-lg">
                            <li className="hover:underline cursor-pointer ">
                                <Link className="py-1 block" to="/#whatwedo">
                                    What We Do
                                </Link>
                            </li>
                            <li className="hover:underline cursor-pointer ">
                                <Link className="py-1 block" to="/#about">
                                    About The Game
                                </Link>
                            </li>
                            <li className="hover:underline cursor-pointer ">
                                <Link className="py-1 block" to="/#points">
                                    Points System
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="px-3 py-8">
                    <Link className="p-2" to="/playerlist">
                        Player List
                    </Link>
                </li>

                <li className="px-3 py-8 ">
                    <Link className="p-2" to="/dreamteam">
                        Dream Team
                    </Link>
                </li>
                <li className="px-3 py-8">
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
                        <ul
                            className="flex flex-col gap-4 flex p-6 font-bold text-lg group-ul"
                            onClick={(e) => handleCloseMenu(e)}
                        >
                            <li
                                onClick={() => setIsHomeMenuOpen(true)}
                                className="px-3 py-2 group relative"
                            >
                                <div className="flex items-center gap-1 px-2">
                                    Home Page
                                    <GoTriangleDown
                                        className="mt-1"
                                        size={"1rem"}
                                    />
                                </div>
                                {isHomeMenuOpen && (
                                    <div className="group-home-ul absolute font-semibold left-1/2 top-14 duration-100 -translate-x-1/2 w-full bg-[rgb(150_60_255)] text-sm p-4 before:absolute before:border-8 before:left-1/2 before:-translate-x-1/2 before:top-[-15px] before:border-transparent before:border-b-[rgb(150_60_255)] opacity-[97%]">
                                        <ul
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsMenuOpen(false);
                                                setIsHomeMenuOpen(false);
                                            }}
                                            className="flex flex-col gap-1"
                                        >
                                            <li className="hover:underline cursor-pointer py-1">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="hover:underline cursor-pointer py-1">
                                                <Link to="/#whatwedo">
                                                    What We Do
                                                </Link>
                                            </li>
                                            <li className="hover:underline cursor-pointer py-1">
                                                <Link to="/#about">
                                                    About The Game
                                                </Link>
                                            </li>
                                            <li className="hover:underline cursor-pointer py-1">
                                                <Link to="/#points">
                                                    Points System
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
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
                className="absolute w-[88px] h-[112px] bottom-0 left-8 z-30 translate-y-1/2 max-[750px]:w-[66px] max-[750px]:h-[84px]"
                ref={imgRef}
            >
                <img src="https://www.premierleague.com/resources/rebrand/v7.123.11/i/elements/pl-main-logo.png" />
            </a>
        </nav>
    );
}

export default NavBar;
