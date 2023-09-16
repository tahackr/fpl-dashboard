import PropTypes from "prop-types";
import CompHeader from "./CompHeader";
import { ResponsiveBar } from "@nivo/bar";

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

    const data = [
        {
            id: "Goals",
            Expected: expected_goals,
            "Expected / 90": expected_goals_per_90,
            Score: goals_scored,
        },
        {
            id: "Assists",
            Expected: expected_assists,
            "Expected / 90": expected_assists_per_90,
            Score: assists,
        },
        {
            id: "Involvements",
            Expected: expected_goal_involvements,
            "Expected / 90": expected_goal_involvements_per_90,
            Score: goals_scored + assists,
        },
    ];

    PlayerEfficiency.propTypes = {
        staticPlayerData: PropTypes.object,
    };
    return (
        <div className="flex flex-col items-center col-span-2 max-[1500px]:col-span-1 max-[1050px]:col-span-2 max-[650px]:col-span-1">
            <CompHeader className="self-start">Efficiency</CompHeader>
            <div className="bg-white/50 rounded-2xl flex justify-center w-full grow min-h-[321px] text-black">
                <ResponsiveBar
                    data={data}
                    keys={["Expected / 90", "Expected", "Score"]}
                    indexBy="id"
                    margin={{ top: 50, right: 20, bottom: 40, left: 40 }}
                    padding={0.3}
                    groupMode="grouped"
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    defs={[
                        {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "#38bcb2",
                            size: 4,
                            padding: 1,
                            stagger: true,
                        },
                        {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: "#eed312",
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                        },
                    ]}
                    fill={[
                        {
                            match: {
                                id: "fries",
                            },
                            id: "dots",
                        },
                        {
                            match: {
                                id: "sandwich",
                            },
                            id: "lines",
                        },
                    ]}
                    borderColor={{
                        from: "color",
                        modifiers: [["darker", 1.6]],
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: "color",
                        modifiers: [["darker", 1.6]],
                    }}
                    legends={[
                        {
                            dataFrom: "keys",
                            anchor: "top-left",
                            direction: "row",
                            justify: false,
                            translateX: -20,
                            translateY: -40,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: "left-to-right",
                            itemOpacity: 0.85,
                            symbolSize: 15,
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={(e) =>
                        e.id +
                        ": " +
                        e.formattedValue +
                        " in country: " +
                        e.indexValue
                    }
                />
            </div>
        </div>
    );
}

export default PlayerEfficiency;
/* 
const data = {
        labels: ["Goals", "Assists", "Involvements"],
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


    <Bar
                    className="p-2 max-h-[317.5px] max-w-[635px]"
                    data={data}
                    options={{
                        plugins: {
                            legend: {
                                display: window.innerWidth >= 450,
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

*/
