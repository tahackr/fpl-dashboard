import PropTypes from "prop-types";
import CompHeader from "./CompHeader";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function PlayerEfficiency({ staticPlayerData }) {
    const {
        expected_assists,
        expected_goals,
        expected_goal_involvements,
        expected_assists_per_90,
        expected_goals_per_90,
        expected_goal_involvements_per_90,
        goals_scored,
        assists,
    } = staticPlayerData;

    const data = {
        labels: ["Goals", "Assists", "Goal Involvements"],
        datasets: [
            {
                type: "bar",
                label: "Expected per 90",
                data: [
                    +expected_goals_per_90,
                    +expected_assists_per_90,
                    +expected_goal_involvements_per_90,
                ],
                backgroundColor: "rgba(255,140,0, 0.7)",
            },
            {
                type: "bar",
                label: "Expected ",
                data: [
                    +expected_goals,
                    +expected_assists,
                    +expected_goal_involvements,
                ],
                backgroundColor: "rgba(0,191,255, 0.7)",
            },

            {
                type: "bar",
                label: "Actual Score",
                data: [+goals_scored, +assists, +goals_scored + +assists],
                backgroundColor: "rgba(0,210,0, 0.7)",
            },
        ],
    };

    PlayerEfficiency.propTypes = {
        staticPlayerData: PropTypes.object,
    };
    return (
        <div className="col-span-2 flex flex-col items-center">
            <CompHeader className="self-start">Efficiency</CompHeader>

            <Bar
                className="bg-neutral-700 rounded-2xl p-8 max-h-[317.5px] max-w-[635px]"
                data={data}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: "#fff",
                            },
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: "#fff",
                            },
                        },
                        x: {
                            ticks: {
                                color: "#fff",
                            },
                        },
                    },
                }}
            />
        </div>
    );
}

export default PlayerEfficiency;
