import axios from "axios"

const baseURL = "https://65390d86e3b530c8d9e7d380.mockapi.io"

export const getForm = () => {
    return axios({
        url: `${baseURL}/form`,
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const sendForm = (data) => {
    return axios.post(`${baseURL}/form`,data,{
        headers:{
            "Content-Type": "application/json"
        },
    })
}

export const updateForm = (data) => {
    return axios.put(`${baseURL}/form/${data.id}`,data,{
        headers:{
            "Content-Type": "application/json"
        },
    })
}

export const deleteForm = (id) => {
    return axios.delete(`${baseURL}/form/${id}`,{
        headers:{
            "Content-Type": "application/json"
        },
    })
}