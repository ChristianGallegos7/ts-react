/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../libs/axios";

export const crearEmpresa = async (formData) => {
    try {
        const {data} = await api.post('/registro', formData);
        return data;
    } catch (error) {
        console.log(error)
    }
}