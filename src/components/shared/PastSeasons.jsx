import CompHeader from "./CompHeader";
import PropTypes from "prop-types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
} from "@mui/material";
import { GoGoal } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { PiSoccerBall } from "react-icons/pi";

function PastSeasons({ player }) {
    const { history_past: seasons } = player;
    if (!seasons.length)
        return (
            <div className="flex flex-col col-start-1 col-end-3 row-start-2 w-[73%] max-[1500px]:w-full max-[1500px]:col-start-auto max-[1500px]:col-end-auto max-[1500px]:row-start-auto">
                <CompHeader>Past Seasons</CompHeader>
                <p className="min-h-[321px] bg-white/50 grow rounded-2xl p-4 font-bold">
                    Did not play in Premier League.
                </p>
            </div>
        );

    PastSeasons.propTypes = {
        player: PropTypes.object,
    };
    return (
        <div className="col-start-1 col-end-3 row-start-2 w-[73%] max-[1500px]:w-full max-[1500px]:col-start-auto max-[1500px]:col-end-auto max-[1500px]:row-start-auto">
            <CompHeader>Past Seasons</CompHeader>
            <div className="h-[321px] bg-white/50 rounded-2xl overflow-y-auto py-2">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="!pr-0 !text-xs !pb-0.5 w-1/2">
                                Season
                            </TableCell>
                            <TableCell className="!px-2 !text-xs !pb-1 !text-center w-[12.5%]">
                                <span className="flex justify-center ">
                                    <PiSoccerBall size={"1rem"} />
                                </span>
                            </TableCell>
                            <TableCell className="!px-2 !text-xs !pb-1 !text-center w-[12.5%]">
                                <Tooltip title="Assists">
                                    <span className="flex justify-center underline decoration-dotted">
                                        <FaHandshake size={"1rem"} />
                                    </span>
                                </Tooltip>
                            </TableCell>
                            <TableCell className="!px-2 !text-xs !pb-1 !text-center w-[12.5%]">
                                <Tooltip title="Minutes Played">
                                    <span className="flex justify-center underline decoration-dotted">
                                        <FiClock size={"1rem"} />
                                    </span>
                                </Tooltip>
                            </TableCell>
                            <TableCell className="!px-2 !text-xs !pb-1 !text-center w-[12.5%]">
                                <Tooltip title="Total Points">
                                    <span className="flex justify-center underline decoration-dotted ">
                                        <GoGoal size={"1rem"} />
                                    </span>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {seasons.toReversed().map((season, i) => {
                            if (i > 4) return;
                            const isLastRow = i === 4;

                            return (
                                <TableRow key={i}>
                                    <TableCell
                                        className={`w-2/5 !pr-0 !font-bold ${
                                            isLastRow ? "!border-none" : ""
                                        } `}
                                    >
                                        {season.season_name}
                                    </TableCell>
                                    <TableCell
                                        className={`!px-2 !text-center !text-xs !font-semibold ${
                                            isLastRow ? "!border-none" : ""
                                        } `}
                                    >
                                        {season.goals_scored}
                                    </TableCell>
                                    <TableCell
                                        className={`!px-2 !text-center !text-xs !font-semibold ${
                                            isLastRow ? "!border-none" : ""
                                        } `}
                                    >
                                        {season.assists}
                                    </TableCell>
                                    <TableCell
                                        className={`!px-2 !text-center !text-xs !font-semibold ${
                                            isLastRow ? "!border-none" : ""
                                        } `}
                                    >
                                        {season.minutes}
                                    </TableCell>
                                    <TableCell
                                        className={`!text-center !text-xs !font-semibold ${
                                            isLastRow ? "!border-none" : ""
                                        } `}
                                    >
                                        {season.total_points}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default PastSeasons;
