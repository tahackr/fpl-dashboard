import { useContext } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import PlayerListItem from "./PlayerListItem";

function PlayerList() {
    const { data, isFetching, error } = useContext(StaticDataContext);

    if (isFetching) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    const renderedPlayers = [];
    for (const [index, player] of data.data.elements
        .toSorted((a, b) => b.second_name.length - a.second_name.length)
        .entries()) {
        if (index > 35) break;
        renderedPlayers.push(<PlayerListItem player={player} key={index} />);
    }
    return (
        <>
            <ul>{renderedPlayers}</ul>
        </>
    );
}

export default PlayerList;
