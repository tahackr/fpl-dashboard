import { useContext, useState } from "react";
import { StaticDataContext } from "../../context/StaticDataProvider";
import PlayerListItem from "./PlayerListItem";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import usePagination from "../../hooks/usePagination";
import { itemCount } from "../../utils/paginationItemCount";
import PlayerListSkeleton from "./PlayerListSkeleton";

function PlayerList() {
    const { data, isFetching, error } = useContext(StaticDataContext);
    const [page, setPage] = useState(1);
    const pages = usePagination(
        page,
        Math.ceil(data?.data.elements.length / itemCount),
        setPage
    );

    if (isFetching) {
        return <PlayerListSkeleton />;
    }

    if (error) {
        return <h2 className="text-xl font-bold">{error.message}</h2>;
    }

    // sort by cost b.now_cost - a.now_cost
    // sort alphabetically ??? second_name ??? first_name ??? web_name ???
    // create a state for sort types

    return (
        <div>
            <ul>
                {data?.data.elements
                    .toSorted(
                        (a, b) => b.second_name.length - a.second_name.length
                    )
                    .slice((page - 1) * itemCount, page * itemCount)
                    .map((player, i) => (
                        <PlayerListItem player={player} key={i} />
                    ))}
            </ul>
            <div className="flex p-4 gap-2 items-center justify-center">
                <button disabled={page === 1}>
                    <BiFirstPage
                        className={`${page === 1 ? "" : "hover:fill-blue-600"}`}
                        onClick={() => setPage(1)}
                        size={"1.5rem"}
                    />
                </button>
                {pages}
                <button
                    onClick={() =>
                        setPage(
                            Math.ceil(data?.data.elements.length / itemCount)
                        )
                    }
                    disabled={
                        Math.ceil(data?.data.elements.length / itemCount) ===
                        page
                    }
                >
                    <BiLastPage
                        className={`${
                            page ===
                            Math.ceil(data?.data.elements.length / itemCount)
                                ? ""
                                : "hover:fill-blue-600"
                        }`}
                        size={"1.5rem"}
                    />
                </button>
            </div>
        </div>
    );
}

export default PlayerList;
