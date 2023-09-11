import PlayerList from "../shared/PlayerList";
import DreamTeam from "../shared/DreamTeam";

function HomePage() {
    return (
        <div className="select-none">
            <PlayerList />
            <DreamTeam />
        </div>
    );
}

export default HomePage;
