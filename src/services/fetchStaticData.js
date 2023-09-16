import axios from "axios";
import { useQuery } from "react-query";

function useFetchStaticData() {
    return useQuery("staticData", async () => {
        try {
            const data = await axios.get("/api/bootstrap-static/", {
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

export default useFetchStaticData;

//  /api/bootstrap-static//
//  /api/fixtures/
//  /api/element-summary/15/
