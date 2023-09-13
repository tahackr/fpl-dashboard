import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import PropTypes from "prop-types";
import CompHeader from "./CompHeader";

function PlayerForm({ player }) {
    const { history } = player;

    if (history.length < 2)
        return (
            <div className="flex flex-col col-start-2 col-end-4 row-start-2 items-end max-[1500px]:col-start-auto max-[1500px]:col-end-auto max-[1500px]:row-start-auto max-[1500px]:items-start">
                <CompHeader className="mr-[75%] translate-x-full max-[1500px]:mr-0 max-[1500px]:translate-x-0">
                    Player Form
                </CompHeader>
                <p className="bg-white/50 grow p-4 font-bold w-3/4 max-[1500px]:w-full rounded-2xl min-h-[321px]">
                    New Transfer! Insufficient data to create a chart.
                </p>
            </div>
        );

    const data = [
        {
            id: "Total Points",
            data: [],
        },
    ];

    for (const [i, match] of history.entries()) {
        if (i > 7) break;
        data[0].data.push({
            x: `Week ${match.round}`,
            y: Number(match.total_points),
        });
    }

    PlayerForm.propTypes = {
        player: PropTypes.object,
    };

    return (
        <div className="flex flex-col col-start-2 col-end-4 row-start-2 items-end max-[1500px]:col-start-auto max-[1500px]:col-end-auto max-[1500px]:row-start-auto max-[1500px]:items-start">
            <CompHeader className="mr-[75%] translate-x-full max-[1500px]:mr-0 max-[1500px]:translate-x-0">
                Player Form
            </CompHeader>
            <div className="w-3/4 max-[1500px]:w-full grow bg-white/50 rounded-2xl min-h-[321px]">
                <ResponsiveLine
                    data={data}
                    margin={{ top: 40, right: 30, bottom: 40, left: 40 }}
                    xScale={{ type: "point" }}
                    yScale={{
                        type: "linear",
                        stacked: false,
                        max: "auto",
                    }}
                    pointSize={11}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2.5}
                    pointBorderColor={{ from: "serieColor" }}
                    useMesh={true}
                    lineWidth={4.5}
                    curve="cardinal"
                    enableArea
                    areaOpacity={0.4}
                    axisLeft={{
                        tickPadding: 15,
                        tickSize: 0,
                    }}
                    axisBottom={null}
                    enableGridX={false}
                    enableGridY={false}
                    colors={{ scheme: "set1" }}
                    defs={[
                        linearGradientDef("gradientA", [
                            { offset: 0, color: "inherit" },
                            { offset: 100, color: "inherit", opacity: 0 },
                        ]),
                    ]}
                    fill={[{ match: { id: "Total Points" }, id: "gradientA" }]}
                />
            </div>
        </div>
    );
}

export default PlayerForm;
