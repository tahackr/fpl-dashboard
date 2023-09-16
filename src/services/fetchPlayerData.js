import axios from "axios";
import { useQuery } from "react-query";

function useFetchPlayerData(id) {
    return useQuery("playerData", async () => {
        try {
            const data = await axios.get(`/api/element-summary/${id}/`, {
                signal: AbortSignal.timeout(5000),
            });
            return data;
        } catch (err) {
            if (err.code === "ERR_CANCELED") {
                throw new Error("Request took too long");
            } else {
                throw err;
            }
        }
    });
}

export default useFetchPlayerData;
