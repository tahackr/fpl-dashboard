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
            {isModalOpen && (
                <PlayerPage
                    setIsModalOpen={setIsModalOpen}
                    staticPlayerData={player}
                />
            )}
            <li
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-4 cursor-pointer py-1.5 px-2 hover:bg-gray-200 font-semibold border rounded"
            >
                <img
                    className="w-10 h-10"
                    src={`https://resources.premierleague.com/premierleague/photos/players/40x40/p${player.code}.png`}
                    onError={(e) => {
                        e.target.src = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${player.team_code}-66.webp`;
                    }}
                />
                {player.second_name}
            </li>
        </>
    );
}

export default PlayerListItem;
