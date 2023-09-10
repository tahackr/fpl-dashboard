import PropTypes from "prop-types";
import { FaSort } from "react-icons/fa";

function ViewLabel({ filterType, handleFilterTypeSelect }) {
    ViewLabel.propTypes = {
        filterType: PropTypes.string,
        handleFilterTypeSelect: PropTypes.func,
    };
    return (
        <label className="grow-[2] flex flex-col rounded text-sm relative h-12">
            View
            <select
                value={filterType}
                onChange={handleFilterTypeSelect}
                className="grow text-lg font-semibold pt-6 absolute top-0 left-0 w-full bg-transparent appearance-none border-b"
            >
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
            <FaSort className="absolute top-1/2 -translate-y-1/2 right-1" />
        </label>
    );
}

export default ViewLabel;
