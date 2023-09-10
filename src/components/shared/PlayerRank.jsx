import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import { useContext } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import useGetPercentile from "../../hooks/useGetPercentile";
import PropTypes from "prop-types";
import CompHeader from "./CompHeader";

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
                label: "Higher than % ",
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
        <div className="flex flex-col">
            <CompHeader className="self-start">Player Rank</CompHeader>
            <div className="w-full h-full flex justify-center items-center bg-white/50 mt-auto rounded-2xl">
                <Radar
                    data={data}
                    className="max-h-[304px]"
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "#fff",
                                },
                                display: true,
                            },
                        },
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
                                backgroundColor: "#111",
                                grid: { color: "#bbb" },
                                pointLabels: { color: "#fff" },
                                angleLines: {
                                    color: "#bbb",
                                },
                                ticks: {
                                    color: "#000",
                                    backdropColor: "#eee",
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default PlayerRank;
