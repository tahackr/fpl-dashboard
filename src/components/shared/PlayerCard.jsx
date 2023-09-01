import PropTypes from "prop-types";
import { useRef } from "react";

function PlayerCard({ staticPlayerData }) {
    const imgRef = useRef();

    PlayerCard.propTypes = {
        staticPlayerData: PropTypes.object,
    };

    return (
        <div className="relative flex gap-8 col-span-2">
            <img
                ref={imgRef}
                className="h-[15rem]"
                src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${staticPlayerData.code}.png`}
                onError={(e) =>
                    (e.currentTarget.src = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${staticPlayerData.team_code}-220.webp`)
                }
            />
            <div className="flex flex-col">
                <h1 className="text-2xl/8 font-extrabold mb-1">
                    {staticPlayerData.second_name}
                </h1>
                <h2 className="text-sm font-medium">
                    {staticPlayerData.first_name}
                </h2>
            </div>

            <img
                className="h-20 w-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-50"
                src={`https://resources.premierleague.com/premierleague/badges/70/t${staticPlayerData.team_code}@x2.png`}
            />
        </div>
    );
}

export default PlayerCard;

// logo size after value @x2
// jersey size after value and dash 66 110 220
