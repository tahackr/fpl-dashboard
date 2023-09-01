import { createContext } from "react";
import useFetchStaticData from "../services/fetchStaticData";
import PropTypes from "prop-types";

const StaticDataContext = createContext();

function StaticDataProvider({ children }) {
    const { data, isFetching, error } = useFetchStaticData();
    const value = { data, isFetching, error };

    StaticDataProvider.propTypes = {
        children: PropTypes.element,
    };

    return (
        <StaticDataContext.Provider value={value}>
            {children}
        </StaticDataContext.Provider>
    );
}

export default StaticDataProvider;
export { StaticDataContext };
