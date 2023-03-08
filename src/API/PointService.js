import axios from "axios";
import {BASE_URL} from "./apiconfig";

export default class PointService {
    static async getAll() {
        const response = await axios.get(BASE_URL + "/points");
        return response.data;
    }

    static async checkHit(r, x, y) {
        const response = await axios.get(BASE_URL + "/points/checkhit", {
            params: {
                r: r,
                x: x,
                y: y
            }
        });
        return response.data;
    }

    static async sendPoint(r, x, y) {
        const response = await axios.post(BASE_URL + "/points", {
            r: r,
            x: x,
            y: y
        });
        return response.data;
    }

    static async clearAll() {
        return await axios.delete(BASE_URL + "/points");
    }

}