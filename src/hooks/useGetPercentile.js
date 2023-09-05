function useGetPercentile(rank, totalPlayers) {
    return (rank / totalPlayers) * 100;
}

export default useGetPercentile;
