import PageHeader from "../components/shared/PageHeader";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

function HomePage() {
    return (
        <div className="select-none">
            <NavBar />
            <PageHeader>FPL Database</PageHeader>
            <div className="container m-auto flex flex-col gap-16 mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-2 mt-2">
                        Welcome to Fantasy Premier League database!
                    </h2>
                    <p className="text-lg font-medium">
                        Here, you can find everything about the players who will
                        help you win the great{" "}
                        <a
                            href="https://fantasy.premierleague.com/prizes"
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold underline text-blue-600"
                        >
                            prizes
                        </a>{" "}
                        FPL offers.
                    </p>
                </div>
                <div className="flex flex-col gap-8 text-lg font-medium">
                    <h3 className="text-2xl font-semibold">About the game</h3>
                    <p>
                        With over 11 million players, Fantasy Premier League is
                        the biggest Fantasy Football game in the world!
                    </p>
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
                </div>

                <div className="flex flex-col gap-8 text-lg font-medium">
                    <h3 className="text-2xl font-semibold">
                        How are points awarded?
                    </h3>
                    <p>
                        Points are awarded to players for goals, assists, saves
                        and clean sheets.
                    </p>
                    <p>
                        Players can also earn additional bonus points in Fantasy
                        as a reward for a good performance in a match (see the{" "}
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
                        &quot;Gameweek&quot; will be scored by your starting XI.
                        But if a starting player does not feature for their club
                        in that round of matches, the points scored by the first
                        player on your bench will automatically be counted
                        instead.
                    </p>
                    <p>
                        The same process occurs if two or three starting players
                        fail to appear.
                    </p>
                    <p>
                        You can also earn extra points by selecting a captain
                        from your starting line-up. The captain&apos;s points
                        are doubled in that Gameweek.
                    </p>
                </div>
                <p className="font-bold text-xl">
                    Interested in being a premier league manager,{" "}
                    <a
                        href="https://users.premierleague.com/users/register/personal?app=plfpl-web&redirect_uri=https://fantasy.premierleague.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-extrabold underline text-blue-600"
                    >
                        start playing!
                    </a>
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
