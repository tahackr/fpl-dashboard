import PropTypes from "prop-types";
import StatisticsColumnItem from "./StatisticsColumnItem";

function StatisticsColumn({ players }) {
    const sortedPlayers = players
        .toSorted((a, b) => b.total_points - a.total_points)
        .slice(0, 10);

    const renderedPlayers = sortedPlayers.map((player, i) => {
        return <StatisticsColumnItem player={player} i={i} key={i} />;
    });

    StatisticsColumn.propTypes = {
        players: PropTypes.array,
    };

    return (
        <ul className="w-[300px] rounded-2xl overflow-hidden border">
            {renderedPlayers}
        </ul>
    );
}

export default StatisticsColumn;
