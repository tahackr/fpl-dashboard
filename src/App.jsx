import QueryClientProvider from "./context/QueryClientProvider";
import StaticDataProvider from "./context/StaticDataProvider";
import HomePage from "./components/pages/HomePage";

function App() {
    return (
        <QueryClientProvider>
            <StaticDataProvider>
                <HomePage />
            </StaticDataProvider>
        </QueryClientProvider>
    );
}

export default App;
