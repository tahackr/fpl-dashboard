import { useState } from "react";
import PlayerListItem from "./PlayerListItem";
import usePagination from "../../hooks/usePagination";
import { itemCount } from "../../utils/paginationItemCount";
import PlayerListSkeleton from "./PlayerListSkeleton";
import useGetFilteredPlayers from "../../hooks/useGetFilteredPlayers";

function PlayerList() {
    const [filteredPlayers, setFilteredPlayers] = useState("all");
    const { data, isFetching, error } = useGetFilteredPlayers(filteredPlayers);
    const [sortType, setSortType] = useState("total_points");
    const [page, setPage] = useState(1);
    const pagination = usePagination(page, data?.length, setPage);

    if (isFetching) {
        return <PlayerListSkeleton />;
    }

    if (error) {
        return <h2 className="text-xl font-bold">{error.message}</h2>;
    }

    const handlePlayerSelect = (e) => {
        setFilteredPlayers(e.target.value);
        setPage(1);
    };

    const handleSortSelect = (e) => {
        setSortType(e.target.value);
        setPage(1);
    };

    const renderedPlayers = data
        ?.toSorted((a, b) => b[sortType] - a[sortType])
        .slice((page - 1) * itemCount, page * itemCount)
        .map((player, i) => <PlayerListItem player={player} key={i} />);

    return (
        <div>
            <label>
                View
                <select onChange={handlePlayerSelect} className="max-w-fit">
                    <optgroup label="Global">
                        <option value={"all"}>All Players</option>
                    </optgroup>
                    <optgroup label="By Position">
                        <option value={"1 by pos"}>Goalkeepers</option>
                        <option value={"2 by pos"}>Defenders</option>
                        <option value={"3 by pos"}>Midfielders</option>
                        <option value={"4 by pos"}>Forwards</option>
                    </optgroup>
                    <optgroup label="By Team">
                        <option value={1}>Arsenal</option>
                        <option value={2}>Aston Villa</option>
                        <option value={3}>Bournemouth</option>
                        <option value={4}>Brentford</option>
                        <option value={5}>Brighton</option>
                        <option value={6}>Burnley</option>
                        <option value={7}>Chelsea</option>
                        <option value={8}>Crystal Palace</option>
                        <option value={9}>Everton</option>
                        <option value={10}>Fulham</option>
                        <option value={11}>Liverpool</option>
                        <option value={12}>Luton</option>
                        <option value={13}>Man City</option>
                        <option value={14}>Man Utd</option>
                        <option value={15}>Newcastle</option>
                        <option value={16}>Nott&apos;m Forest</option>
                        <option value={17}>Sheffield Utd</option>
                        <option value={18}>Spurs</option>
                        <option value={19}>West Ham</option>
                        <option value={20}>Wolves</option>
                    </optgroup>
                </select>
            </label>
            <label>
                Sorted By
                <select
                    onChange={handleSortSelect}
                    className="max-w-fit"
                    value={sortType}
                >
                    <option value="total_points">Total Points</option>
                    <option value="points_per_game">Points Per Game</option>
                    <option value="now_cost">Price</option>
                    <option value="goals_scored">Goals</option>
                    <option value="assists">Assists</option>
                    <option value="bps">Bonus Points System</option>
                    <option value="influence">Influence</option>
                    <option value="threat">Threat</option>
                    <option value="creativity">Creativity</option>
                    <option value="ict_index">ICT Index</option>
                    <option value="form">Form</option>
                    <option value="minutes">Minutes</option>
                    <option value="starts">Starts</option>
                    <option value="selected_by_percent">Selected By %</option>
                    <option value="dreamteam_count">
                        Dream Team Selections
                    </option>
                    <option value="expected_assists">
                        Expected Assists xA(Total)
                    </option>
                    <option value="expected_goals">
                        Expected Goals xG(Total)
                    </option>
                    <option value="yellow_cards">Yellow Cards</option>
                    <option value="red_cards">Red Cards</option>
                </select>
            </label>
            <ul>{renderedPlayers}</ul>
            {pagination}
        </div>
    );
}

export default PlayerList;
