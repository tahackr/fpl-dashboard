import { useContext } from "react";
import { StaticDataContext } from "../context/StaticDataProvider";

function useGetFilteredPlayers(label) {
    const { data, isFetching, error } = useContext(StaticDataContext);

    if (isFetching || error) return { isFetching, error };

    if (label === "all") return { data: data.data.elements };

    const players = data.data.elements.filter((player) =>
        isNaN(+label)
            ? player.element_type === +label[0]
            : player.team === +label
    );
    return { data: players };
}

export default useGetFilteredPlayers;
