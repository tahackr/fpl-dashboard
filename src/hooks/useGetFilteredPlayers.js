import { useContext } from "react";
import { StaticDataContext } from "../context/StaticDataProvider";

function useGetFilteredPlayers(label, sortType, query) {
    const { data, isFetching, error } = useContext(StaticDataContext);

    const sortAndQuery = (playersArr) => {
        return playersArr
            .toSorted((a, b) => b[sortType] - a[sortType])
            .filter((player) => {
                if (player.web_name[1] === ".")
                    return player.web_name
                        .slice(2)
                        .toLowerCase()
                        .startsWith(query.toLowerCase());

                return player.web_name
                    .toLowerCase()
                    .startsWith(query.toLowerCase());
            });
    };

    if (isFetching || error) return { isFetching, error };

    if (label === "all")
        return {
            data: sortAndQuery(data.data.elements),
        };

    const filteredPlayers = data.data.elements.filter((player) =>
        isNaN(+label)
            ? player.element_type === +label[0]
            : player.team === +label
    );

    const players = sortAndQuery(filteredPlayers);

    return { data: players };
}

export default useGetFilteredPlayers;
