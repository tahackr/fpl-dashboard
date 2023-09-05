import PropTypes from "prop-types";
import PlayerPage from "../pages/PlayerPage";
import { useState } from "react";

function PlayerListItem({ player }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    PlayerListItem.propTypes = {
        player: PropTypes.object,
    };

    return (
        <>
            <li
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-4 cursor-pointer py-1.5 px-2 hover:bg-gray-200 font-semibold border rounded"
            >
                <img
                    className="w-6 h-8"
                    src={`https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${player.team_code}-66.webp`}
                />
                {player.second_name}
                {isModalOpen && (
                    <PlayerPage
                        setIsModalOpen={setIsModalOpen}
                        staticPlayerData={player}
                    />
                )}
            </li>
        </>
    );
}

export default PlayerListItem;
