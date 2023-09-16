import { ResponsiveRadar } from "@nivo/radar";
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

    const data = [
        {
            id: "ICT",
            "Higher than %":
                100 - useGetPercentile(ict_index_rank, elements.length),
        },
        {
            id: "Form",
            "Higher than %": 100 - useGetPercentile(form_rank, elements.length),
        },
        {
            id: "PPG",
            "Higher than %":
                100 - useGetPercentile(points_per_game_rank, elements.length),
        },
        {
            id: "Selected",
            "Higher than %":
                100 - useGetPercentile(selected_rank, elements.length),
        },
        {
            id: "Cost",
            "Higher than %":
                100 - useGetPercentile(now_cost_rank, elements.length),
        },
    ];

    PlayerRank.propTypes = {
        staticPlayerData: PropTypes.object,
    };

    return (
        <div className="flex flex-col">
            <CompHeader className="self-start">Player Rank</CompHeader>
            <div className="w-full grow flex justify-center items-center bg-white/50 mt-auto rounded-2xl min-h-[321px] text-black">
                <ResponsiveRadar
                    data={data}
                    keys={["Higher than %"]}
                    indexBy="id"
                    maxValue={100}
                    valueFormat=">-.2f"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    borderColor={{ from: "color" }}
                    gridLabelOffset={36}
                    dotSize={10}
                    dotColor={{ theme: "background" }}
                    dotBorderWidth={2}
                    colors={{ scheme: "set1" }}
                    curve="linearClosed"
                />
            </div>
        </div>
    );
}

export default PlayerRank;
