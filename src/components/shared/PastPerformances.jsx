import { useState } from "react";
import PropTypes from "prop-types";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import PastPerformanceItem from "./PastPerformanceItem";

function PastPerformances({ staticPlayerData, player }) {
    const [itemToShow, setItemToShow] = useState(0);

    if (!player.history.length) {
        return <p className="text-white">Did not play a match this season</p>;
    }

    PastPerformances.propTypes = {
        staticPlayerData: PropTypes.object,
        player: PropTypes.object,
    };

    return (
        <div className="overflow-x-hidden w-72 h-72 relative">
            {player.history.toReversed().map((match, i) => (
                <PastPerformanceItem
                    key={i}
                    staticPlayerData={staticPlayerData}
                    match={match}
                    itemToShow={itemToShow}
                    i={i}
                />
            ))}
            <div>
                <div className="absolute bottom-2 flex justify-center w-full gap-4">
                    <BsArrowLeftCircle
                        onClick={() => {
                            if (!itemToShow) {
                                setItemToShow(player.history.length - 1);
                            } else {
                                setItemToShow((prev) => prev - 1);
                            }
                        }}
                        className="cursor-pointer hover:fill-blue-600"
                        size={"1.3rem"}
                    />
                    <BsArrowRightCircle
                        onClick={() => {
                            if (player.history.length === itemToShow + 1) {
                                setItemToShow(0);
                            } else {
                                setItemToShow((prev) => prev + 1);
                            }
                        }}
                        className="cursor-pointer hover:fill-blue-600"
                        size={"1.3rem"}
                    />
                </div>
            </div>
        </div>
    );
}

export default PastPerformances;
