import PropTypes from "prop-types";
import PlayerPage from "../pages/PlayerPage";
import { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import useGetTeams from "../../hooks/useGetTeams";

function PlayerListItem({ player, sortType }) {
    const team = useGetTeams(player.team);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const renderLastTd =
        sortType !== "now_cost" &&
        sortType !== "selected_by_percent" &&
        sortType !== "form" &&
        sortType !== "total_points";

    let position;
    if (player.element_type === 1) position = "GK";
    if (player.element_type === 2) position = "DEF";
    if (player.element_type === 3) position = "MID";
    if (player.element_type === 4) position = "FWD";

    const cost = String(player.now_cost).split("");
    cost.splice(-1, 0, ".");
    cost.join("");

    PlayerListItem.propTypes = {
        player: PropTypes.object,
        sortType: PropTypes.string,
    };

    return (
        <>
            {isModalOpen && (
                <PlayerPage
                    setIsModalOpen={setIsModalOpen}
                    staticPlayerData={player}
                />
            )}
            <TableRow>
                <TableCell
                    className={`w-1/2 max-[400px]:w-full hover:bg-gray-200 !p-2 ${
                        window.innerWidth <= 400 ? "!p-0.5" : ""
                    }`}
                    onClick={() => setIsModalOpen(true)}
                >
                    <div
                        className={`flex items-center gap-4 cursor-pointer rounded ${
                            window.innerWidth <= 400 ? "gap-1" : ""
                        }`}
                    >
                        <img
                            className={`w-10 h-10 ${
                                window.innerWidth <= 400 ? "w-8 h-8" : ""
                            }`}
                            src={`https://resources.premierleague.com/premierleague/photos/players/40x40/p${player.code}.png`}
                            onError={(e) => {
                                e.target.src = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${player.team_code}-66.webp`;
                            }}
                        />
                        <div className="overflow-hidden">
                            <p className="truncate !font-semibold">
                                {player.web_name}
                            </p>
                            <p
                                className={`flex gap-2 font-extralight text-xs ${
                                    window.innerWidth <= 400 ? "gap-1" : ""
                                }`}
                            >
                                <span>{team.short_name}</span>
                                <span>{position}</span>
                            </p>
                        </div>
                    </div>
                </TableCell>
                <TableCell className="whitespace-nowrap !p-2 max-[450px]:!text-xs">
                    {cost}
                </TableCell>
                <TableCell className="whitespace-nowrap !p-2 max-[450px]:!text-xs">
                    {player.selected_by_percent}%
                </TableCell>
                <TableCell className="whitespace-nowrap !p-2 max-[450px]:!text-xs">
                    {player.form}
                </TableCell>
                <TableCell className="whitespace-nowrap !p-2 max-[450px]:!text-xs">
                    {player.total_points}
                </TableCell>
                {renderLastTd ? (
                    <TableCell className="whitespace-nowrap !p-2 max-[450px]:!text-xs">
                        {player[sortType]}
                    </TableCell>
                ) : (
                    ""
                )}
            </TableRow>
        </>
    );
}

export default PlayerListItem;
