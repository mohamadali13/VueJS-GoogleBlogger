// We saved the work by writing one Method for Axios and we can call it based on REST Operation
// Like this for read   :   ApplyREST("GET", "www.google.com/api", null)  
// Like this for write  :   ApplyREST("PUT", "www.google.com/api", JSONData)  
import axios from "axios";
export default {
    ApplyREST: function (Method, URL, Data) {
        return axios(URL, {
            method: Method,
            headers: {
                "Content-Type": "application/json"
            },
            data: Data,
        }).then(Response => Response);
    }
};