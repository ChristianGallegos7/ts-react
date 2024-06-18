/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../libs/axios";
import { isAxiosError } from "axios";

export const crearEmpresa = async (formData) => {
    try {
        const {data} = await api.post('/auth/empresa/registro', formData);
        return data;
    } catch (error) {
       if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
       }
    }
}

export const loginEmpresa = async (formData) => {
    try {
        const {data} = await api.post('/auth/empresa/login', formData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}