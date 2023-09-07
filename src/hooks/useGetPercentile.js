function useGetPercentile(rank, totalPlayers) {
    return ((rank / totalPlayers) * 100).toFixed(1);
}

export default useGetPercentile;
