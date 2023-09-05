import { useContext } from "react";
import { StaticDataContext } from "../context/StaticDataProvider";

function useGetTeams(id, staticPlayerData) {
    const {
        data: {
            data: { teams },
        },
    } = useContext(StaticDataContext);

    const [opponent] = teams.filter((team) => team.id === id);
    const [playerTeam] = teams.filter(
        (team) => team.code === staticPlayerData.team_code
    );

    return { opponent, playerTeam };
}

export default useGetTeams;
