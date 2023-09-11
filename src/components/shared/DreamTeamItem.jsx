import PropTypes from "prop-types";

function DreamTeamItem({ player }) {
    DreamTeamItem.propTypes = {
        player: PropTypes.object,
    };

    return (
        <div className="w-28 max-[850px]:w-20 flex flex-col items-center max-[635px]:w-16 max-[350px]:w-14">
            <div>
                <img
                    className="max-[850px]:w-14 max-[635px]:w-8"
                    src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.code}.png`}
                />
            </div>
            <p className="w-full text-center flex flex-col rounded font-semibold max-[850px]:text-sm max-[635px]:text-xs max-[635px]:font-normal">
                <span className="truncate bg-black text-white rounded-t px-0.5">
                    {player.web_name}
                </span>
                <span className="bg-green-300 rounded-b">
                    {player.total_points}
                </span>
            </p>
        </div>
    );
}

export default DreamTeamItem;

/* 
Jersey src
`https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${
                        player.team_code
                    }${isGoalKeeper ? "_1" : ""}-66.webp`
*/
