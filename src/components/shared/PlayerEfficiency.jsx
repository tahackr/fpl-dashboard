import PropTypes from "prop-types";
import CompHeader from "./CompHeader";

function PlayerEfficiency({ staticPlayerData }) {
    PlayerEfficiency.propTypes = {
        staticPlayerData: PropTypes.object,
    };
    return (
        <div>
            <CompHeader>Efficiency</CompHeader>
        </div>
    );
}

export default PlayerEfficiency;
