import PropTypes from "prop-types";
import { TableHead, TableCell, TableRow, Tooltip } from "@mui/material";

function PlayerListTableHead({ sortType }) {
    const renderLastTd =
        sortType !== "now_cost" &&
        sortType !== "selected_by_percent" &&
        sortType !== "form" &&
        sortType !== "total_points";

    PlayerListTableHead.propTypes = {
        sortType: PropTypes.string,
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell className="!px-2 !py-0.5 !text-xs !text-[0.625rem]">
                    Player
                </TableCell>
                <TableCell className="!px-2 !py-0.5 !text-xs !text-[0.625rem]">
                    Cost
                </TableCell>
                <TableCell className="!px-2 !py-0.5 !text-xs !text-[0.625rem]">
                    <Tooltip arrow placement="top" title={"Selected by %"}>
                        <span className="underline decoration-dotted">
                            Sel.
                        </span>
                    </Tooltip>
                </TableCell>
                <TableCell className="!px-2 !py-0.5 !text-xs !text-[0.625rem]">
                    Form
                </TableCell>
                <TableCell className="!px-2 !py-0.5 !text-xs !text-[0.625rem]">
                    <Tooltip arrow placement="top" title={"Total Points"}>
                        <span className="underline decoration-dotted">
                            Pts.
                        </span>
                    </Tooltip>
                </TableCell>
                {renderLastTd ? (
                    <TableCell className="!px-2 !py-0.5 !text-xs !text-[0.625rem]">
                        **
                    </TableCell>
                ) : (
                    ""
                )}
            </TableRow>
        </TableHead>
    );
}

export default PlayerListTableHead;
