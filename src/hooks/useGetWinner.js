function useGetWinner(match) {
    const isHome = match.was_home;
    const wonTheMatch =
        (match.team_h_score !== match.team_a_score &&
            match.team_h_score > match.team_a_score &&
            isHome) ||
        (match.team_h_score !== match.team_a_score &&
            match.team_h_score < match.team_a_score &&
            !isHome);
    const lostTheMatch =
        !wonTheMatch && match.team_h_score !== match.team_a_score;

    return { isHome, wonTheMatch, lostTheMatch };
}

export default useGetWinner;
