import PropTypes from "prop-types";
import useGetTeams from "../../hooks/useGetTeams";
import CompHeader from "./CompHeader";
import { useContext } from "react";
import { FixturesContext } from "../../context/FixturesProvider";

function NextMatch({ match, staticPlayerData }) {
    const { data } = useContext(FixturesContext);
    const [nextMatch] = data.data.filter(
        (fixture) => fixture.code === match.code
    );

    const { opponent, playerTeam } = useGetTeams(
        match.is_home ? match.team_a : match.team_h,
        staticPlayerData
    );
    const isHome = match.is_home;

    NextMatch.propTypes = {
        match: PropTypes.object,
        staticPlayerData: PropTypes.object,
    };

    return (
        <div className="flex flex-col items-center">
            <CompHeader className="self-start">Next Match</CompHeader>
            <div className="grow w-full flex flex-col items-center justify-center bg-neutral-500 rounded-2xl p-8">
                <h3 className="font-extrabold mb-4">{match.event_name}</h3>
                <a
                    className="flex items-center gap-4 mb-2 duration-300 hover:scale-110 "
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.premierleague.com/match/${nextMatch.pulse_id}`}
                >
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
                </a>
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
        </div>
    );
}

export default NextMatch;
