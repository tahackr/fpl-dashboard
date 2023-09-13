import PlayerList from "../components/shared/PlayerList";
import PageHeader from "../components/shared/PageHeader";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

function PlayerListPage() {
    return (
        <div className="select-none">
            <NavBar />
            <PageHeader>Player List</PageHeader>
            <div className="container m-auto">
                <PlayerList />
            </div>
            <Footer />
        </div>
    );
}

export default PlayerListPage;
