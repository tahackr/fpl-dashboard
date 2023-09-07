import PropTypes from "prop-types";
import { PiSoccerBall, PiHandCoinsLight } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { FiClock, FiStar } from "react-icons/fi";
import { GiDarkSquad } from "react-icons/gi";
import { MdOutlineScore } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import CompHeader from "./CompHeader";

function PlayerSeasonStats({ staticPlayerData }) {
    const {
        assists,
        goals_scored,
        minutes,
        bps,
        ict_index,
        dreamteam_count,
        starts,
        yellow_cards,
        red_cards,
        now_cost,
        points_per_game,
        total_points,
    } = staticPlayerData;

    PlayerSeasonStats.propTypes = {
        staticPlayerData: PropTypes.object,
    };

    return (
        <div className="col-start-[-1] col-end-[-2] row-start-1 row-end-3 row-span-2 flex flex-col">
            <CompHeader>Season Stats</CompHeader>
            <div className="mt-3 grow grid grid-cols-2 gap-2 !text-black bg-neutral-500 rounded-2xl p-6">
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <PiSoccerBall className="min-w-[1rem]" />
                        <h3 className="font-semibold">GOALS</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {goals_scored}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <FaHandshake className="min-w-[1rem]" />
                        <h3 className="font-semibold">ASSISTS</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {assists}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <FiClock className="min-w-[1rem]" />
                        <h3 className="font-semibold">MINUTES</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {minutes}
                    </span>
                </div>

                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <RiUserStarFill className="min-w-[1rem]" />
                        <h3 className="font-semibold">ICT INDEX</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {ict_index}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <FiStar className="min-w-[1rem]" />
                        <h3 className="font-semibold">DREAM TEAM</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {dreamteam_count}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <GiDarkSquad className="min-w-[1rem]" />
                        <h3 className="font-semibold">FIRST XI</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {starts}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <IoPricetagOutline className="min-w-[1rem]" />
                        <h3 className="font-semibold">COST</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {now_cost}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <PiHandCoinsLight className="min-w-[1rem]" />
                        <h3 className="font-semibold">BPS</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {bps}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <MdOutlineScore className="min-w-[1rem]" />
                        <h3 className="font-semibold">PPG</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {points_per_game}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <GoGoal className="min-w-[1rem]" />
                        <h3 className="font-semibold">TOTAL POINTS</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {total_points}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <TbCards
                            stroke="black"
                            fill="yellow"
                            className="min-w-[1rem]"
                        />
                        <h3 className="font-semibold">YELLOW CARDS</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {yellow_cards}
                    </span>
                </div>
                <div className="rounded p-2 bg-[#faf0e6] flex flex-col gap-2 justify-between border hover:scale-110 duration-300">
                    <div className="flex items-center gap-2">
                        <TbCards
                            stroke="black"
                            fill="red"
                            className="min-w-[1rem]"
                        />
                        <h3 className="font-semibold">RED CARDS</h3>
                    </div>
                    <span className="font-extrabold self-end text-lg">
                        {red_cards}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PlayerSeasonStats;
