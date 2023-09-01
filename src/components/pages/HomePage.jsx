import PlayerList from "../shared/PlayerList";

function HomePage() {
    return (
        <div className="select-none">
            <h1 className="text-lg font-bold">Home Page</h1>
            <PlayerList />
        </div>
    );
}

export default HomePage;
