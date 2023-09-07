import axios from "axios";
import { useQuery } from "react-query";

function useFetchFixtures() {
    return useQuery("fixtures", async () => {
        const data = await axios.get("/api/fixtures/", {
            cache: "force-cache",
        });
        return data;
    });
}

export default useFetchFixtures;
