import axios from "axios";

const URL = 'http://localhost:8080/api'

export const getWarehouses = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${URL}/warehouses`)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
        })
    })
}

