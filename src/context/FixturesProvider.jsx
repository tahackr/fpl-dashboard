import { createContext } from "react";
import PropTypes from "prop-types";
import useFetchFixtures from "../services/fetchFixtures";

const FixturesContext = createContext();

function FixturesProvider({ children }) {
    const { data, isFetching, error } = useFetchFixtures();
    const value = { data, isFetching, error };

    FixturesProvider.propTypes = {
        children: PropTypes.element,
    };
    return (
        <FixturesContext.Provider value={value}>
            {children}
        </FixturesContext.Provider>
    );
}

export default FixturesProvider;
export { FixturesContext };
