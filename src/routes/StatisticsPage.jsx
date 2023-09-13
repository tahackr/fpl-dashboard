import PageHeader from "../components/shared/PageHeader";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import Statistics from "../components/shared/Statistics";

function StatisticsPage() {
    return (
        <div className="select-none">
            <NavBar />
            <PageHeader>Leaders</PageHeader>
            <div className="container m-auto">
                <Statistics />
            </div>
            <Footer />
        </div>
    );
}

export default StatisticsPage;
