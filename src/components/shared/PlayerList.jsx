import { useRef, useState } from "react";
import PlayerListItem from "./PlayerListItem";
import usePagination from "../../hooks/usePagination";
import { itemCount } from "../../utils/paginationItemCount";
import PlayerListSkeleton from "./PlayerListSkeleton";
import useGetFilteredPlayers from "../../hooks/useGetFilteredPlayers";
import SortLabel from "./sortLabel";
import ViewLabel from "./ViewLabel";
import { BiSearchAlt2 } from "react-icons/bi";
import { Table, TableBody } from "@mui/material";
import PlayerListTableHead from "./PlayerListTableHead";

function PlayerList() {
    const [filterType, setFilterType] = useState("all");
    const [sortType, setSortType] = useState("total_points");
    const [query, setQuery] = useState("");
    const { data, isFetching, error } = useGetFilteredPlayers(
        filterType,
        sortType,
        query
    );
    const [page, setPage] = useState(1);
    const pagination = usePagination(page, data?.length, setPage);
    const searchInputRef = useRef();

    if (isFetching) {
        return <PlayerListSkeleton />;
    }

    if (error) {
        return <h2 className="text-xl font-bold">{error.message}</h2>;
    }

    const handleFilterTypeSelect = (e) => {
        setFilterType(e.target.value);
        setPage(1);
    };

    const handleSortSelect = (e) => {
        setSortType(e.target.value);
        setPage(1);
    };

    const handleSearch = (e) => {
        if (!e.target.value.match(/^[A-Za-z\s]*$/)) return;
        setQuery(e.target.value);
        setPage(1);
    };

    const renderedPlayers = data
        .slice((page - 1) * itemCount, page * itemCount)
        .map((player, i) => (
            <PlayerListItem player={player} sortType={sortType} key={i} />
        ));

    return (
        <div className="p-1">
            <div className="flex max-[750px]:flex-col max-[750px]:mb-6 gap-6 mb-10">
                <ViewLabel
                    filterType={filterType}
                    handleFilterTypeSelect={handleFilterTypeSelect}
                />
                <SortLabel
                    sortType={sortType}
                    handleSortSelect={handleSortSelect}
                />
                <div className="relative grow flex">
                    <input
                        ref={searchInputRef}
                        className="p-3 grow shadow rounded-md"
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search for player"
                    />
                    <div
                        onClick={() => searchInputRef.current.focus()}
                        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black p-1 rounded-full"
                    >
                        <BiSearchAlt2 fill="white" />
                    </div>
                </div>
            </div>
            <Table>
                <PlayerListTableHead sortType={sortType} />
                <TableBody>{renderedPlayers}</TableBody>
            </Table>
            <div className="flex justify-center ">
                <p className="pt-2 font-semibold text-yellow-700">
                    {data?.length} players shown
                </p>
            </div>
            {pagination}
        </div>
    );
}

export default PlayerList;
