import PageHeader from "../components/shared/PageHeader";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import DreamTeam from "../components/shared/DreamTeam";

function DreamTeamPage() {
    return (
        <div className="select-none">
            <NavBar />
            <PageHeader>Dream Team</PageHeader>
            <DreamTeam />
            <Footer />
        </div>
    );
}

export default DreamTeamPage;
