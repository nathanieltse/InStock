import axios from "axios";

const URL = 'http://localhost:8080/api'

export const getWarehouses = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/api/warehouses')
            .then(res => {
            console.log(res)
            }).catch(err => {
            console.log(err)
        })
    })
}

