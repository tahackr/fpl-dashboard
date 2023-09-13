import { useContext } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import DreamTeamItem from "./DreamTeamItem";

function DreamTeam() {
    const { data } = useContext(StaticDataContext);
    const allPlayers = data?.data.elements.filter(
        (player) => player.in_dreamteam
    );
    const goalkeeper = allPlayers
        ?.filter((player) => player.element_type === 1)
        .map((player, i) => <DreamTeamItem player={player} key={i} />);

    const defenders = allPlayers
        ?.filter((player) => player.element_type === 2)
        .map((player, i) => <DreamTeamItem player={player} key={i} />);

    const midfielders = allPlayers
        ?.filter((player) => player.element_type === 3)
        .map((player, i) => <DreamTeamItem player={player} key={i} />);

    const forwards = allPlayers
        ?.filter((player) => player.element_type === 4)
        .map((player, i) => <DreamTeamItem player={player} key={i} />);

    return (
        <div className="m-auto bg-[length:1210px_890px] max-[850px]:bg-[length:938px_690px] max-[635px]:bg-[length:625px_460px] bg-no-repeat bg-top bg-[url('https://fantasy.premierleague.com/static/media/pitch-default.dab51b01.svg')] mt-[-2rem]">
            <div className="flex flex-col h-full gap-10 max-[850px]:gap-4 max-[635px]:gap-2">
                <div className="flex justify-center gap-16 pt-4">
                    {goalkeeper}
                </div>
                <div className="flex justify-center gap-20 mx-2 max-[850px]:gap-14 max-[635px]:gap-8 max-[480px]:gap-4 max-[400px]:gap-1">
                    {defenders}
                </div>
                <div className="flex justify-center gap-20 mx-2 max-[850px]:gap-14 max-[635px]:gap-8 max-[480px]:gap-4 max-[400px]:gap-1">
                    {midfielders}
                </div>
                <div className="flex justify-center gap-20 max-[635px]:gap-12 max-[480px]:gap-10 max-[400px]:gap-4 mb-8">
                    {forwards}
                </div>
            </div>
        </div>
    );
}

export default DreamTeam;
