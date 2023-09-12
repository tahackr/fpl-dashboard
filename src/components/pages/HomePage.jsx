import PlayerList from "../shared/PlayerList";
import DreamTeam from "../shared/DreamTeam";
import Statistics from "../shared/Statistics";

function HomePage() {
    return (
        <div className="select-none">
            <PlayerList />
            <DreamTeam />
            <Statistics />
        </div>
    );
}

export default HomePage;
