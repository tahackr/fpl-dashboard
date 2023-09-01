import PropTypes from "prop-types";

function PastPerformances({ staticPlayerData, player }) {
    PastPerformances.propTypes = {
        staticPlayerData: PropTypes.object,
        player: PropTypes.object,
    };

    return <div>PastPerformances</div>;
}

export default PastPerformances;
