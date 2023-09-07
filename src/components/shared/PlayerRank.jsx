import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import { useContext } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import useGetPercentile from "../../hooks/useGetPercentile";
import PropTypes from "prop-types";

function PlayerRank({ staticPlayerData }) {
    const {
        data: {
            data: { elements },
        },
    } = useContext(StaticDataContext);

    const {
        selected_rank,
        now_cost_rank,
        ict_index_rank,
        form_rank,
        points_per_game_rank,
    } = staticPlayerData;

    const data = {
        labels: ["ICT", "Form", "Points per game", "Selected", "Cost"],
        datasets: [
            {
                label: "Score",
                data: [
                    100 - useGetPercentile(ict_index_rank, elements.length),
                    100 - useGetPercentile(form_rank, elements.length),
                    100 -
                        useGetPercentile(points_per_game_rank, elements.length),
                    100 - useGetPercentile(selected_rank, elements.length),
                    100 - useGetPercentile(now_cost_rank, elements.length),
                ],
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.5)",
            },
        ],
    };

    PlayerRank.propTypes = {
        staticPlayerData: PropTypes.object,
    };

    return (
        <div>
            <Radar
                data={data}
                className="bg-neutral-100 p-0.5 rounded-md"
                options={{
                    elements: {
                        point: {
                            pointRadius: 4,
                            hoverRadius: 5,
                        },
                    },
                    scales: {
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                        },
                    },
                }}
            />
        </div>
    );
}

export default PlayerRank;
