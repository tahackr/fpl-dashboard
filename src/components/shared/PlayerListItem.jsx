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
            <li onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                {player.second_name}
            </li>
        </>
    );
}

export default PlayerListItem;
