import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const busca = async (url, setState) => {
    const response = await api.get(url);

    setState(response.data);
};