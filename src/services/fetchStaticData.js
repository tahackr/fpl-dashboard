import axios from "axios";
import { useQuery } from "react-query";

function useFetchStaticData() {
    return useQuery("staticData", async () => {
        const data = await axios.get("/api/bootstrap-static//", {
            cache: "force-cache",
        });
        return data;
    });
}

export default useFetchStaticData;

//  /api/bootstrap-static//
//  /api/fixtures/
//  /api/element-summary/15/
