import { useContext } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import StatisticsColumn from "./StatisticsColumn";
import CompHeader from "./CompHeader";

function Statistics() {
    const { data, isFetching, error } = useContext(StaticDataContext);
    if (isFetching) return;
    if (error) return;

    const players = data && data.data.elements;
    const forwards = players?.filter((player) => player.element_type === 4);
    const midfielders = players?.filter((player) => player.element_type === 3);
    const defenders = players?.filter((player) => player.element_type === 2);
    const goalkeepers = players?.filter((player) => player.element_type === 1);

    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <div className="flex gap-2">
                    <div className="flex flex-col">
                        <CompHeader className="">Forwards</CompHeader>
                        <StatisticsColumn players={forwards} />
                    </div>

                    <div className="flex flex-col">
                        <CompHeader>Midfielders</CompHeader>
                        <StatisticsColumn players={midfielders} />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col">
                        <CompHeader>Defenders</CompHeader>
                        <StatisticsColumn players={defenders} />
                    </div>
                    <div className="flex flex-col">
                        <CompHeader>Goalkeepers</CompHeader>
                        <StatisticsColumn players={goalkeepers} />
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
            </div>
        </div>
    );
}

export default Statistics;
<div className="flex flex-col">
    <CompHeader>Forwards</CompHeader>
</div>;
