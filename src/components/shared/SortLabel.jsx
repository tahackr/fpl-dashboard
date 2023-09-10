import PropTypes from "prop-types";
import { FaSort } from "react-icons/fa";

function SortLabel({ sortType, handleSortSelect }) {
    SortLabel.propTypes = {
        sortType: PropTypes.string,
        handleSortSelect: PropTypes.func,
    };
    return (
        <label className="grow-[2] flex flex-col rounded text-sm relative h-12">
            Sorted By
            <select
                onChange={handleSortSelect}
                className="grow text-lg font-semibold pt-6 absolute top-0 left-0 w-full bg-transparent appearance-none border-b"
                value={sortType}
            >
                <option value="total_points">Total Points</option>
                <option value="points_per_game">Points Per Game</option>
                <option value="now_cost">Cost</option>
                <option value="goals_scored">Goals</option>
                <option value="assists">Assists</option>
                <option value="bps">Bonus Points System</option>
                <option value="influence">Influence</option>
                <option value="threat">Threat</option>
                <option value="creativity">Creativity</option>
                <option value="ict_index">ICT Index</option>
                <option value="form">Form</option>
                <option value="minutes">Minutes</option>
                <option value="starts">Starts</option>
                <option value="selected_by_percent">Selected By %</option>
                <option value="dreamteam_count">Dream Team Selections</option>
                <option value="expected_assists">
                    Expected Assists xA(Total)
                </option>
                <option value="expected_goals">Expected Goals xG(Total)</option>
                <option value="yellow_cards">Yellow Cards</option>
                <option value="red_cards">Red Cards</option>
            </select>
            <FaSort className="absolute top-1/2 -translate-y-1/2 right-1" />
        </label>
    );
}

export default SortLabel;
