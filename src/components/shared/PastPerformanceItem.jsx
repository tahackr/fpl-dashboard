import PropTypes from "prop-types";
import useGetWinner from "../../hooks/useGetWinner";
import useGetTeams from "../../hooks/useGetTeams";
import { PiSoccerBall } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GiBurningRoundShot, GiFallingStar } from "react-icons/gi";
import { MdArchitecture, MdScore } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";

function PastPerformanceItem({ match, staticPlayerData, i, itemToShow }) {
    const { opponent, playerTeam } = useGetTeams(
        match.opponent_team,
        staticPlayerData
    );

    const { isHome, wonTheMatch, lostTheMatch } = useGetWinner(match);

    PastPerformanceItem.propTypes = {
        match: PropTypes.object,
        staticPlayerData: PropTypes.object,
        i: PropTypes.number,
        itemToShow: PropTypes.number,
    };

    return (
        <div
            className="absolute flex flex-col items-center w-full duration-500"
            style={{
                translate: (itemToShow - i) * -100 + "%",
            }}
        >
            <h2 className="mb-4 font-bold">Gameweek {match.round}</h2>
            <div className="flex items-center gap-2 font-medium mb-6">
                <span>
                    {isHome ? playerTeam.short_name : opponent.short_name}
                </span>
                <img
                    className="w-8"
                    src={`https://resources.premierleague.com/premierleague/badges/70/t${
                        isHome ? staticPlayerData.team_code : opponent.code
                    }.png`}
                />
                <div
                    className={`bg-white font-semibold text-black px-2 whitespace-nowrap ${
                        wonTheMatch ? "!bg-green-600" : ""
                    }${lostTheMatch ? "!bg-red-600" : ""}`}
                >
                    {match.team_h_score} - {match.team_a_score}
                </div>
                <img
                    className="w-8"
                    src={`https://resources.premierleague.com/premierleague/badges/70/t${
                        isHome ? opponent.code : staticPlayerData.team_code
                    }.png`}
                />
                <span>
                    {isHome ? opponent.short_name : playerTeam.short_name}
                </span>
            </div>
            <div className="flex gap-4 mb-4 whitespace-nowrap">
                <div>
                    <div className="flex items-center gap-2">
                        <FiClock />
                        Minutes : {match.minutes}
                    </div>
                    <div className="flex items-center gap-2 ">
                        <PiSoccerBall />
                        Goals : {match.goals_scored}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaHandshake />
                        Assists : {match.assists}
                    </div>
                    <div className="flex items-center gap-2">
                        <TbCards stroke="yellow" fill="yellow" />
                        Yellow Cards : {match.yellow_cards}
                    </div>
                    <div className="flex items-center gap-2">
                        <TbCards stroke="red" fill="red" />
                        Red Cards : {match.red_cards}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <GiBurningRoundShot />
                        Threat : {match.threat}
                    </div>
                    <div className="flex items-center gap-2">
                        <MdArchitecture />
                        Creativity : {match.creativity}
                    </div>
                    <div className="flex items-center gap-2">
                        <GiFallingStar />
                        Influence : {match.influence}
                    </div>
                    <div className="flex items-center gap-2">
                        <RiUserStarFill />
                        ICT Index : {match.ict_index}
                    </div>
                    <div className="flex items-center gap-2">
                        <MdScore />
                        Points : {match.total_points}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastPerformanceItem;
