import { Routes, Route } from "react-router-dom";
import QueryClientProvider from "./context/QueryClientProvider";
import StaticDataProvider from "./context/StaticDataProvider";
import FixturesProvider from "./context/FixturesProvider";
import HomePage from "./routes/HomePage";
import PlayerListPage from "./routes/PlayerListPage";
import DreamTeamPage from "./routes/DreamTeamPage";
import StatisticsPage from "./routes/StatisticsPage";

function App() {
    return (
        <QueryClientProvider>
            <StaticDataProvider>
                <FixturesProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dreamteam" element={<DreamTeamPage />} />
                        <Route
                            path="/playerlist"
                            element={<PlayerListPage />}
                        />
                        <Route path="/stats" element={<StatisticsPage />} />
                    </Routes>
                </FixturesProvider>
            </StaticDataProvider>
        </QueryClientProvider>
    );
}

export default App;
