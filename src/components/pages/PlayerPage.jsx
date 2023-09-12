import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import useFetchPlayerData from "../../services/fetchPlayerData";
import { useContext, useRef, useState } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import PlayerCard from "../shared/PlayerCard";
import PastPerformances from "../shared/PastPerformances";
import NextMatch from "../shared/NextMatch";
import PlayerEfficiency from "../shared/PlayerEfficiency";
import PlayerSeasonStats from "../shared/PlayerSeasonStats";
import PlayerRank from "../shared/PlayerRank";
import useGetBackgroundColor from "../../hooks/useGetBackgroundColor";
import PlayerPageSkeleton from "../shared/PlayerPageSkeleton";
import ModalCloseButton from "../shared/ModalCloseButton";
import PlayerForm from "../shared/PlayerForm";
import PastSeasons from "../shared/PastSeasons";
import { AiOutlineClose } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";

function PlayerPage({ staticPlayerData, setIsModalOpen }) {
    const {
        data: {
            data: { teams },
        },
    } = useContext(StaticDataContext);
    const [showNews, setShowNews] = useState(true);
    const backgroundRef = useRef();
    const newsCloseButtonRef = useRef();

    const { data, isFetching, error, refetch } = useFetchPlayerData(
        staticPlayerData.id
    );
    const player = data && data.data;
    const [playerTeam] = teams.filter(
        (team) => team.code === staticPlayerData.team_code
    );
    const backgroundColor = useGetBackgroundColor(playerTeam.name);

    const handleClose = (e) => {
        e.stopPropagation();
        if (e.target === backgroundRef.current) setIsModalOpen(false);
    };

    const handleNewsClose = (e) => {
        if (e.target.closest(".news-close") === newsCloseButtonRef.current)
            setShowNews(false);
    };

    if (isFetching) {
        return createPortal(
            <div
                ref={backgroundRef}
                onClick={handleClose}
                className="bg-zinc-800/80 fixed inset-0"
            >
                <div
                    className={`gap-4 fixed top-20 right-20 left-20 bottom-20 p-8 select-none rounded-lg grid grid-cols-4 place-items-stretch max-[1500px]:grid-cols-3 overflow-y-scroll max-[1200px]:top-0 max-[1200px]:right-0 max-[1200px]:bottom-0 max-[1200px]:left-0 max-[1200px]:rounded-none max-[1050px]:grid-cols-2 max-[650px]:grid-cols-1 ${backgroundColor}`}
                >
                    <PlayerPageSkeleton />
                    <ModalCloseButton
                        setIsModalOpen={setIsModalOpen}
                        backgroundColor={backgroundColor}
                    />
                </div>
            </div>,
            document.body
        );
    }

    if (error) {
        return (
            <div
                ref={backgroundRef}
                onClick={handleClose}
                className="bg-zinc-800/80 fixed inset-0 "
            >
                <div
                    className={`shadow-xl fixed top-20 right-20 left-20 bottom-20 p-8 select-none rounded-lg flex flex-col gap-4 items-center ${backgroundColor}`}
                >
                    <div className="font-bold text-xl">Oops!</div>
                    <div className="font-bold text-xl">
                        Something Went Wrong
                    </div>
                    <div className="font-md text-md">{error.message}</div>
                    <button
                        className={`w-fit p-2 font-medium duration-400 rounded hover:shadow-xl hover:bg-black hover:text-white bg-white text-black`}
                        onClick={refetch}
                    >
                        Try Again
                    </button>
                    <ModalCloseButton
                        setIsModalOpen={setIsModalOpen}
                        backgroundColor={backgroundColor}
                    />
                </div>
            </div>
        );
    }

    PlayerPage.propTypes = {
        staticPlayerData: PropTypes.object,
        setIsModalOpen: PropTypes.func,
    };

    return createPortal(
        <div
            ref={backgroundRef}
            onClick={handleClose}
            className="bg-zinc-800/80 fixed inset-0 "
        >
            <div
                className={`shadow-xl gap-4 fixed top-20 right-20 left-20 bottom-20 p-8 select-none rounded-lg grid grid-cols-4 place-items-stretch max-[1500px]:grid-cols-3 overflow-y-scroll max-[1200px]:top-0 max-[1200px]:right-0 max-[1200px]:bottom-0 max-[1200px]:left-0 max-[1200px]:rounded-none max-[1050px]:grid-cols-2 max-[700px]:p-2 max-[650px]:grid-cols-1 ${backgroundColor}`}
            >
                {staticPlayerData.news && showNews && (
                    <div className="absolute top-8 bg-white/95 text-black w-full text-center flex items-center justify-center gap-4 p-2 font-bold z-40">
                        <FcCancel size={"1.5rem"} />
                        {staticPlayerData.news}
                        <button
                            className="absolute right-2 news-close"
                            ref={newsCloseButtonRef}
                        >
                            <AiOutlineClose
                                onClick={(e) => handleNewsClose(e)}
                            />
                        </button>
                    </div>
                )}
                <PlayerCard staticPlayerData={staticPlayerData} />
                <PastPerformances
                    staticPlayerData={staticPlayerData}
                    player={player}
                />
                <PlayerRank staticPlayerData={staticPlayerData} />
                <PastSeasons player={player} />
                <PlayerForm player={player} />
                <NextMatch
                    staticPlayerData={staticPlayerData}
                    match={player.fixtures[0]}
                />
                <PlayerSeasonStats staticPlayerData={staticPlayerData} />
                <PlayerEfficiency staticPlayerData={staticPlayerData} />

                <ModalCloseButton
                    setIsModalOpen={setIsModalOpen}
                    backgroundColor={backgroundColor}
                />
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
