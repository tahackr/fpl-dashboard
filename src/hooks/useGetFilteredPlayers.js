import { useContext, useMemo } from "react";
import { StaticDataContext } from "../context/StaticDataProvider";

function useGetFilteredPlayers(label, sortType, query) {
    const { data, isFetching, error } = useContext(StaticDataContext);

    const sortAndQuery = (playersArr) => {
        if (!query)
            return playersArr.toSorted((a, b) => b[sortType] - a[sortType]);

        return playersArr
            .filter((player) => {
                return player.web_name
                    .toLowerCase()
                    .includes(query.toLowerCase());
            })
            .toSorted((a, b) => b[sortType] - a[sortType]);
    };

    const filteredPlayers = useMemo(
        () =>
            data?.data.elements.filter((player) =>
                isNaN(+label)
                    ? player.element_type === +label[0]
                    : player.team === +label
            ),
        [label, data]
    );

    if (isFetching || error) return { isFetching, error };

    if (label === "all")
        return {
            data: sortAndQuery(data.data.elements),
        };

    const players = sortAndQuery(filteredPlayers);

    return { data: players, isFetching, error };
}

export default useGetFilteredPlayers;
