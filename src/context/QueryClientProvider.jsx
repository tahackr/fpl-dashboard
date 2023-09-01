import {
    QueryClient,
    QueryClientProvider as QueClientProvider,
} from "react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

function QueryClientProvider({ children }) {
    QueryClientProvider.propTypes = {
        children: PropTypes.element,
    };

    return (
        <QueClientProvider client={queryClient}>{children}</QueClientProvider>
    );
}

export default QueryClientProvider;
