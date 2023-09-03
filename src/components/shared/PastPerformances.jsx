import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import { PiSoccerBall } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GiBurningRoundShot, GiFallingStar } from "react-icons/gi";
import { MdArchitecture, MdScore } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function PastPerformances({ staticPlayerData, player }) {
    const {
        data: {
            data: { teams },
        },
    } = useContext(StaticDataContext);

    const [itemToShow, setItemToShow] = useState(0);

    if (!player.history.length) {
        return <p className="text-white">Did not play a match this season</p>;
    }

    // At first I used "map" method to create matches variable
    // During development I discovered a bug
    // If there is a match today, even though it hasn't started yet we get an object with "null" values in it
    // So I changed it to for of loop to break the loop if match hasn't started yet
    // Then it made more sense to me to reverse the array to render the last match first and then go down from there to week 1
    // But this causes a bug when there is a match today my carousel's first item is translated because it is at index 1
    // So I created a skipped variable and if we skipped the first match because it has not started we render other items according to that
    const matches = [];
    for (const [i, match] of player.history.toReversed().entries()) {
        let skipped;
        if (new Date().getTime() < new Date(match.kickoff_time).getTime()) {
            skipped = true;
            break;
        }

        const [opponent] = teams.filter(
            (team) => team.id === match.opponent_team
        );
        const [playerTeam] = teams.filter(
            (team) => team.code === staticPlayerData.team_code
        );

        const isHome = match.was_home;
        const teamCode = staticPlayerData.team_code;
        const oppTeamCode = opponent.code;
        const wonTheMatch =
            (match.team_h_score !== match.team_a_score &&
                match.team_h_score > match.team_a_score &&
                isHome) ||
            (match.team_h_score !== match.team_a_score &&
                match.team_h_score < match.team_a_score &&
                !isHome);
        const lostTheMatch =
            !wonTheMatch && match.team_h_score !== match.team_a_score;

        matches.push(
            <div
                className="absolute flex flex-col items-center w-full duration-500"
                style={{
                    translate:
                        (itemToShow - (skipped ? i - 1 : i)) * -100 + "%",
                }}
                key={i}
            >
                <h2 className="mb-4 font-bold">Week {match.round}</h2>
                <div className="flex items-center gap-2 font-medium mb-6">
                    <span>
                        {isHome ? playerTeam.short_name : opponent.short_name}
                    </span>
                    <img
                        className="w-8"
                        src={`https://resources.premierleague.com/premierleague/badges/70/t${
                            isHome ? teamCode : oppTeamCode
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
                            isHome ? oppTeamCode : teamCode
                        }.png`}
                    />
                    <span>
                        {isHome ? opponent.short_name : playerTeam.short_name}
                    </span>
                </div>
                <div className="flex gap-4 mb-4 whitespace-nowrap">
                    <div>
                        <div className="flex items-center gap-2 ">
                            <PiSoccerBall />
                            Goals : {match.goals_scored}
                        </div>
                        <div className="flex items-center gap-2">
                            <FaHandshake />
                            Assists : {match.assists}
                        </div>
                        <div className="flex items-center gap-2">
                            <FiClock />
                            Minutes : {match.minutes}
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
                <div className="flex gap-4">
                    <BsArrowLeftCircle
                        onClick={() => {
                            if (!itemToShow) {
                                setItemToShow(matches.length - 1);
                            } else {
                                setItemToShow((prev) => prev - 1);
                            }
                        }}
                        className="cursor-pointer hover:fill-blue-600"
                        size={"1.3rem"}
                    />
                    <BsArrowRightCircle
                        onClick={() => {
                            if (matches.length === itemToShow + 1) {
                                setItemToShow(0);
                            } else {
                                setItemToShow((prev) => prev + 1);
                            }
                        }}
                        className="cursor-pointer hover:fill-blue-600"
                        size={"1.3rem"}
                    />
                </div>
            </div>
        );
    }

    PastPerformances.propTypes = {
        staticPlayerData: PropTypes.object,
        player: PropTypes.object,
    };

    return (
        <div className="overflow-x-hidden w-72 h-72 relative">{matches}</div>
    );
}

export default PastPerformances;
