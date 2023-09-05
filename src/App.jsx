import QueryClientProvider from "./context/QueryClientProvider";
import StaticDataProvider from "./context/StaticDataProvider";
import FixturesProvider from "./context/FixturesProvider";
import HomePage from "./components/pages/HomePage";

function App() {
    return (
        <QueryClientProvider>
            <StaticDataProvider>
                <FixturesProvider>
                    <HomePage />
                </FixturesProvider>
            </StaticDataProvider>
        </QueryClientProvider>
    );
}

export default App;
