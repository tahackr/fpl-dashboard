import PropTypes from "prop-types";
import useGetTeams from "../../hooks/useGetTeams";

function NextMatch({ match, staticPlayerData }) {
    const { opponent, playerTeam } = useGetTeams(
        match.is_home ? match.team_a : match.team_h,
        staticPlayerData
    );
    const isHome = match.is_home;
    console.log(staticPlayerData);

    NextMatch.propTypes = {
        match: PropTypes.object,
        staticPlayerData: PropTypes.object,
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="font-extrabold mb-4">{match.event_name}</h2>
            <div className="flex items-center gap-4 mb-2">
                <img
                    className="h-16 w-16"
                    src={`https://resources.premierleague.com/premierleague/badges/70/t${
                        isHome ? playerTeam.code : opponent.code
                    }@x2.png`}
                />
                <span className="font-black">VS</span>
                <img
                    className="h-16 w-16"
                    src={`https://resources.premierleague.com/premierleague/badges/70/t${
                        isHome ? opponent.code : playerTeam.code
                    }@x2.png`}
                />
            </div>
            <p className="font-medium">
                {Intl.DateTimeFormat(navigator.language, {
                    hour: "numeric",
                    minute: "numeric",
                }).format(new Date(match.kickoff_time))}
            </p>
            <p className="font-medium mb-2">
                {Intl.DateTimeFormat(navigator.language, {
                    dateStyle: "full",
                }).format(new Date(match.kickoff_time))}
            </p>
            <p>Fixture difficulty : {match.difficulty}</p>
        </div>
    );
}

export default NextMatch;