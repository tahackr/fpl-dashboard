import axios from "axios";
import { useQuery } from "react-query";

function useFetchPlayerData(id) {
    return useQuery("playerData", async () => {
        const data = await axios.get(`/api/element-summary/${id}/`, {
            cache: "force-cache",
        });
        return data;
    });
}

export default useFetchPlayerData;
