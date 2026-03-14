import axios from "axios";

export const role = axios
    .post("/auth/check")
    .then((res) => {
        return res.data;
})