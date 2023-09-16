import axios from "axios";
import { useQuery } from "react-query";

function useFetchFixtures() {
    return useQuery("fixtures", async () => {
        try {
            const data = await axios.get("/api/fixtures/", {
                cache: "no-store",
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

export default useFetchFixtures;
