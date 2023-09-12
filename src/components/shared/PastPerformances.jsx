import { useState } from "react";
import PropTypes from "prop-types";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import PastPerformanceItem from "./PastPerformanceItem";
import CompHeader from "./CompHeader";

function PastPerformances({ staticPlayerData, player }) {
    const [itemToShow, setItemToShow] = useState(0);

    if (!player.history.length) {
        return (
            <div>
                <CompHeader>Matches</CompHeader>
                <p className="p-1 text-white">
                    Did not play a match this season
                </p>
            </div>
        );
    }

    PastPerformances.propTypes = {
        staticPlayerData: PropTypes.object,
        player: PropTypes.object,
    };

    return (
        <div className="overflow-x-hidden relative min-h-[22.6rem] min-w-[19rem] max-[350px]:min-w-[17rem]">
            <CompHeader>Matches</CompHeader>
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
                <div className="absolute bottom-4 flex justify-center w-full gap-4">
                    <button>
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
                    </button>
                    <button>
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
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PastPerformances;
