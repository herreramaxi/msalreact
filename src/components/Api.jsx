import axios from "axios"

export async function get(url) {
    return axios.get(process.env.REACT_APP_BASE_URL + "/" + url);
}

