import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import useFetchPlayerData from "../../services/fetchPlayerData";
import { useRef } from "react";
import PlayerCard from "../shared/PlayerCard";
import { AiOutlineClose } from "react-icons/ai";
import PastPerformances from "../shared/PastPerformances";

function PlayerPage({ staticPlayerData, setIsModalOpen }) {
    const backgroundRef = useRef();

    const { data, isFetching, error } = useFetchPlayerData(staticPlayerData.id);
    const player = data && data.data;

    if (isFetching) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    const handleClose = (e) => {
        if (e.target === backgroundRef.current) setIsModalOpen(false);
    };

    PlayerPage.propTypes = {
        staticPlayerData: PropTypes.object,
        setIsModalOpen: PropTypes.func,
    };

    return createPortal(
        <div
            ref={backgroundRef}
            onClick={handleClose}
            className="bg-zinc-500 fixed inset-0 "
        >
            <div className="fixed top-20 right-20 left-20 bottom-20 bg-black/90 text-white p-8 select-none rounded-lg grid grid-cols-3 place-items-center">
                <PlayerCard staticPlayerData={staticPlayerData} />
                <PastPerformances
                    staticPlayerData={staticPlayerData}
                    player={player}
                />

                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-0 right-0 p-1 cursor-pointer"
                >
                    <AiOutlineClose className="w-6 h-6" />
                </button>
            </div>
        </div>,
        document.body
    );
}

export default PlayerPage;

// image src https://resources.premierleague.com/premierleague/badges/70/t17.png
// /t${staticPlayerData.team_code}.png
// kaleci forma img src https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${staticPlayerData.team_code}_1-66.webp
// oyuncu forma img src https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${staticPlayerData.team_code}-66.webp
// Takım logo img src https://resources.premierleague.com/premierleague/badges/70/t${team.code}.png
// Büyük takım logo img src https://resources.premierleague.com/premierleague/badges/70/t${team.code}@x2.png
// oyuncu foto img src https://resources.premierleague.com/premierleague/photos/players/250x250/p80201.png
// oyuncu foto size 250x250 110x140
