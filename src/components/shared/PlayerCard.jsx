import PropTypes from "prop-types";
import { useRef } from "react";

function PlayerCard({ staticPlayerData }) {
    const imgRef = useRef();

    PlayerCard.propTypes = {
        staticPlayerData: PropTypes.object,
    };

    return (
        <div className="relative flex gap-2 flex-wrap">
            <div className="flex flex-col">
                <h1 className="text-2xl/8 font-extrabold mb-1">
                    {staticPlayerData.second_name}
                </h1>
                <h2 className="text-sm font-medium">
                    {staticPlayerData.first_name}
                </h2>
            </div>
            <img
                ref={imgRef}
                className="max-w-[250px] max-h-[250px] self-end"
                src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${staticPlayerData.code}.png`}
                onError={(e) =>
                    (e.currentTarget.src = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${staticPlayerData.team_code}-220.webp`)
                }
            />
            <img
                className="h-20 w-20 absolute top-8 right-8 z-[-1] opacity-50"
                src={`https://resources.premierleague.com/premierleague/badges/70/t${staticPlayerData.team_code}@x2.png`}
            />
        </div>
    );
}

export default PlayerCard;

// logo size after value @x2
// jersey size after value and dash 66 110 220
