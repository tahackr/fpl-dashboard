function useGetBackgroundColor(team) {
    switch (team) {
        case "West Ham":
        case "Burnley":
        case "Aston Villa":
            return "bg-gradient-to-r from-red-900 to-blue-300 text-black";
        case "Crystal Palace":
            return "bg-gradient-to-r from-red-700 to-blue-600 text-white";
        case "Brentford":
            return "bg-gradient-to-tr from-red-600 to-white text-black";
        case "Bournemouth":
            return "bg-gradient-to-r from-red-600 to-black text-white";
        case "Wolves":
            return "bg-gradient-to-r from-yellow-600 to-black text-white";
        case "Liverpool":
        case "Man Utd":
        case "Arsenal":
            return "bg-gradient-to-r from-red-700 to-red-800 text-white";
        case "Man City":
            return "bg-gradient-to-r from-cyan-500 to-blue-500 text-white";
        case "Brighton":
            return "bg-gradient-to-tr from-blue-700 to-white text-black";
        case "Newcastle":
        case "Fulham":
            return "bg-gradient-to-r from-black to-white text-white";
        case "Luton":
        case "Sheffield Utd":
        case "Nott'm Forest":
            return "bg-gradient-to-r from-red-600 to-white text-black";
        case "Chelsea":
        case "Everton":
            return "bg-gradient-to-r from-blue-700 to-blue-300 text-white";
        case "Spurs":
            return "bg-gradient-to-br from-neutral-100 to-blue-950 text-black";
        default:
            return "bg-neutral-700 text-white";
    }
}

export default useGetBackgroundColor;
