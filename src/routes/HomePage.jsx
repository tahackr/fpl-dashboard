import PageHeader from "../components/shared/PageHeader";
import Footer from "../components/shared/Footer";
import effchart from "../assets/effchart.png";
import formchart from "../assets/formchart.png";
import radar from "../assets/radar.png";
import squadMobile from "../assets/squadMobile.png";
import virgil from "../assets/virgil.png";
import { BsArrowDown } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function HomePage() {
    const { hash } = useLocation();
    const whatwedoRef = useRef();
    const aboutRef = useRef();
    const pointsRef = useRef();
    useEffect(() => {
        if (!hash) window.scrollTo({ top: 0, behavior: "smooth" });
        if (hash === "#whatwedo")
            whatwedoRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        if (hash === "#about")
            aboutRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        if (hash === "#points")
            pointsRef.current?.scrollIntoView({
                behavior: "smooth",
            });
    }, [hash]);

    return (
        <div className="select-none">
            <PageHeader>FPL Scout</PageHeader>
            <div className="flex flex-col">
                <section
                    className="py-24 max-[400px]:px-2 max-[550px]:px-6 max-[400px]:text-sm"
                    id="whatwedo"
                    ref={whatwedoRef}
                >
                    <div className="grid grid-cols-2 px-14 items-center container mx-auto gap-28 max-[1050px]:gap-16 max-[1050px]:grid-cols-1 max-[400px]:px-2 max-[550px]:px-6">
                        <div className="max-[1050px]:text-center">
                            <h2 className="text-3xl font-bold mb-6 mt-2 max-[400px]:text-xl">
                                Welcome to Fantasy Premier League Scout!
                            </h2>
                            <p className="font-medium mb-12">
                                We have everything you need to be the best
                                manager of the best football league in the
                                world.
                            </p>
                            <p className="font-semibold text-lg mb-8">
                                Search for any player and we will provide you
                                his statistics.You wonder how was he performing
                                lately? We got his last matches, his rank
                                compared to other players in various fields, his
                                efficiency ratings, his performance throughout
                                the season and even his stats from past seasons.
                            </p>
                            <div className="flex gap-4 justify-center max-[319px]:flex-col">
                                <button>
                                    <a
                                        href="https://users.premierleague.com/users/register/personal?app=plfpl-web&redirect_uri=https://fantasy.premierleague.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block bg-gradient-to-r from-[rgb(0,255,135)] to-cyan-400 p-5 px-10 rounded-lg text-black font-bold whitespace-nowrap hover:from-cyan-400 hover:to-[rgb(0,255,135)] transition-all duration-1000 max-[450px]:px-6"
                                    >
                                        Start playing!
                                    </a>
                                </button>
                                <Link
                                    onClick={() =>
                                        aboutRef.current.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }
                                    to="#about"
                                    className="flex items-center justify-center gap-0.5 rounded-lg border-purple-950 border-[6px] p-2 px-10 font-bold text-black hover:bg-purple-950 hover:text-white max-[450px]:px-6"
                                >
                                    <span className="whitespace-nowrap">
                                        Learn more
                                    </span>
                                    <BsArrowDown />
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                className="w-full max-w-[430px] max-h-[254px] rounded-lg shadow-xl"
                                src="https://www.pngitem.com/pimgs/m/54-549170_premier-league-players-png-png-download-premier-league.png"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-sky-300 py-24">
                    <div className="container mx-auto relative grid grid-cols-2 gap-32 place-items-center px-14 min-h-[30rem] max-[850px]:grid-cols-1 max-[850px]:gap-10 max-[850px]:justify-items-center max-[550px]:px-6 max-[400px]:px-2">
                        <div className="ml-48 relative w-48 h-20 my-40 max-[500px]:w-36 max-[500px]:ml-40 before:h-96 before:bg-blue-500 before:opacity-50 before:w-[28rem] before:block before:top-0 before:-translate-y-1/2 before:left-0 before:-translate-x-1/2 before:ml-[-0.6rem] before:mt-[1.2rem] before:rounded-xl max-[500px]:before:w-72 max-[500px]:before:h-64 max-[330px]:ml-32 max-[330px]:w-28 max-[330px]:before:w-64 max-[330px]:before:ml-[-0.4rem] self-end">
                            <img
                                className="shadow-xl w-60 absolute top-0 left-4 -translate-x-1/4 rounded-xl z-[4]"
                                src={formchart}
                            />
                            <img
                                className="shadow-xl w-60 absolute top-0 left-0 -translate-y-3/4 -translate-x-1/2 rounded-xl z-[1]"
                                src={radar}
                            />
                            <img
                                className="absolute top-0 left-0 -translate-y-1/3 -translate-x-full rounded-xl w-60 z-[3] shadow-xl "
                                src={effchart}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-3xl ">
                                Visual Charts
                            </h2>
                            <p className="font-semibold text-lg mb-6 w-96">
                                This is not another database with countless
                                plain text you&apos;ll just browse through.
                            </p>
                            <p className="font-semibold text-lg w-96">
                                We show our data in a compact design which has
                                all you need, with visual charts and we even
                                have a customized theme for every club.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="container mx-auto flex flex-col gap-8 text-lg font-medium px-14 py-24 max-[400px]:px-2 max-[550px]:px-6"
                    id="about"
                    ref={aboutRef}
                >
                    <h3 className="text-2xl font-bold">About the game</h3>

                    <p>
                        Every week you have £100m to pick a squad of 15 players.
                    </p>
                    <p>
                        Players score points for your team based on their
                        performances for their clubs in Premier League matches.
                    </p>
                    <p>
                        Prices of players are given based on the number of
                        points they are projected to deliver.So you need to
                        spend your money wisely.Luckily we are here to help you
                        with that :)
                    </p>
                    <img
                        className="max-w-[667px] self-center max-[750px]:w-full max-[750px]:mt-8 shadow-2xl rounded-xl mt-8"
                        src={squadMobile}
                    />
                </section>

                <section className="relative text-xl bg-[rgb(55_0_65)] text-white overflow-hidden  mt-12 max-[600px]:mx-1 mt-8 mb-32">
                    <div className="relative z-10 h-full flex justify-center items-center gap-16 px-20 py-8 max-[1000px]:flex max-[1000px]:flex-col max-[700px]:px-8 max-[400px]:px-2 max-[550px]:px-6">
                        <div className="flex flex-col gap-4">
                            <div className="font-bold bg-gradient-to-r from-[rgb(0,255,135)] to-cyan-400 bg-clip-text text-transparent text-2xl">
                                Still haven&apos;t started your journey?
                            </div>
                            <div className="text-base">
                                With over 11 million players, Fantasy Premier
                                League is the biggest Fantasy Football game in
                                the world. It&apos;s FREE to play and you can
                                win great prizes!
                            </div>
                        </div>
                        <div>
                            <a
                                href="https://users.premierleague.com/users/register/personal?app=plfpl-web&redirect_uri=https://fantasy.premierleague.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gradient-to-r from-[rgb(0,255,135)] to-cyan-400  p-5 px-10 rounded-lg text-black font-bold whitespace-nowrap"
                            >
                                Start playing!
                            </a>
                        </div>
                    </div>
                </section>
                <section
                    className="bg-sky-300 py-24 mb-24"
                    id="points"
                    ref={pointsRef}
                >
                    <div className="container mx-auto px-14 max-[400px]:px-2 max-[550px]:px-6 grid grid-cols-2 place-items-center max-[1100px]:grid-cols-1 gap-16">
                        <div className="flex flex-col gap-8 text-lg font-medium">
                            <h3 className="text-2xl font-bold">
                                How are points awarded?
                            </h3>
                            <p>
                                Points are awarded to players for goals,
                                assists, saves and clean sheets.
                            </p>
                            <p>
                                Players can also earn additional bonus points in
                                Fantasy as a reward for a good performance in a
                                match (see the{" "}
                                <a
                                    href="https://www.premierleague.com/news/106533"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-bold underline text-blue-600"
                                >
                                    Bonus Points System
                                </a>{" "}
                                for more).
                            </p>
                            <p>
                                Your team&apos;s points for the match round or
                                &quot;Gameweek&quot; will be scored by your
                                starting XI. But if a starting player does not
                                feature for their club in that round of matches,
                                the points scored by the first player on your
                                bench will automatically be counted instead.
                            </p>
                            <p>
                                The same process occurs if two or three starting
                                players fail to appear.
                            </p>
                            <p>
                                You can also earn extra points by selecting a
                                captain from your starting line-up. The
                                captain&apos;s points are doubled in that
                                Gameweek.
                            </p>
                        </div>
                        <img className="max-h-[433px]" src={virgil} />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
