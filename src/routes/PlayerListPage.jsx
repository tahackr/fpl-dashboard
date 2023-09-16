import PlayerList from "../components/shared/PlayerList";
import PageHeader from "../components/shared/PageHeader";
import Footer from "../components/shared/Footer";

function PlayerListPage() {
    return (
        <div className="select-none">
            <PageHeader>Player List</PageHeader>
            <div className="container m-auto">
                <PlayerList />
            </div>
            <Footer />
        </div>
    );
}

export default PlayerListPage;
