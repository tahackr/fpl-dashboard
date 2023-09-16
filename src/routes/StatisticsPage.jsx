import PageHeader from "../components/shared/PageHeader";
import Footer from "../components/shared/Footer";
import Statistics from "../components/shared/Statistics";

function StatisticsPage() {
    return (
        <div className="select-none">
            <PageHeader>Leaders</PageHeader>
            <div className="container m-auto">
                <Statistics />
            </div>
            <Footer />
        </div>
    );
}

export default StatisticsPage;
