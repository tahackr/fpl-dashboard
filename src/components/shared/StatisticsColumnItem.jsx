import PropTypes from "prop-types";
import useGetTeams from "../../hooks/useGetTeams";
import useGetBackgroundColor from "../../hooks/useGetBackgroundColor";
import { useState } from "react";
import PlayerPage from "../pages/PlayerPage";

function StatisticsColumnItem({ player, i }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const team = useGetTeams(player.team);
    const backgroundColor = useGetBackgroundColor(team.name);

    if (!i)
        return (
            <li
                onClick={() => setIsModalOpen(true)}
                className={`flex flex-col gap-1 px-4 py-2 relative cursor-pointer ${backgroundColor}`}
            >
                {isModalOpen && (
                    <PlayerPage
                        staticPlayerData={player}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
                <span className="font-bold">{i + 1}</span>
                <div className="flex flex-col">
                    <span className="text-sm leading-[0.75rem] font-medium">
                        {player.first_name}
                    </span>
                    <span className="text-2xl leading-[1.5rem] font-bold mb-0.5">
                        {player.second_name}
                    </span>
                </div>
                <div className="flex font-medium items-center gap-2">
                    <img
                        className="w-6 h-6"
                        src={`https://resources.premierleague.com/premierleague/badges/70/t${team.code}.png`}
                    />
                    <span className="text-xs">{team.name}</span>
                </div>
                <span className="text-[2rem] leading-[2rem] font-bold">
                    {player.total_points}
                </span>
                <img
                    className="absolute bottom-0 right-0 h-32"
                    src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.code}.png`}
                    onError={(e) =>
                        (e.currentTarget.src = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${player.team_code}-220.webp`)
                    }
                />
            </li>
        );

    StatisticsColumnItem.propTypes = {
        player: PropTypes.object,
        i: PropTypes.number,
    };
    return (
        <li
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center gap-4 p-2 pl-3 cursor-pointer ${
                i !== 9 ? "border-b" : ""
            }`}
        >
            {isModalOpen && (
                <PlayerPage
                    staticPlayerData={player}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
            <span className="font-bold">{i + 1}</span>
            <img
                className="w-6 h-6"
                src={`https://resources.premierleague.com/premierleague/badges/70/t${team.code}.png`}
            />
            <div className="flex flex-col">
                <span className="font-semibold">
                    {player.first_name} {player.second_name}
                </span>
                <span className="text-xs">{team.name}</span>
            </div>
        </li>
    );
}

export default StatisticsColumnItem;
