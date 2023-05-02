import client from "./client"
<<<<<<< HEAD
import axios from "axios"
=======
>>>>>>> c174b0a4107f86071ce5d525764199ea9d1a716d

const getSingle = async (name) => {
    try {
        return await client.get(`/MyExercise/${name}`).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const getAll = async (token) => {
    try {
        return await client.get(`/exercises/${token}`).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const addSingle = async (token, name) => {
<<<<<<< HEAD
    data = { "token": token, "name": name }
=======
    data = { "token": token, "name": name}
>>>>>>> c174b0a4107f86071ce5d525764199ea9d1a716d
    try {
        return await client.post('/MyExercise/add-exercise', data).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const removeSingle = async (token, name) => {
<<<<<<< HEAD
    data = { "token": token, "name": name }
    try {
        return await client.delete('/MyExercise/delete-exercise', { data: data }).then((response) => { return response })
=======
    data = { "token": token, "name": name}
    try {
        return await client.delete('/MyExercise/delete-exercise', {data: data}).then((response) => { return response })
>>>>>>> c174b0a4107f86071ce5d525764199ea9d1a716d
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

<<<<<<< HEAD
const postKey = async (name, value) => {
    const data = {
        "datum": {
            "value": value
        }
    }

    const headers = {
        "Content-Type": "application/json",
        "X-AIO-Key": "aio_nNqp585pUs2SLc8qwCw5dZmzVwi2"
    }

    try {
        return await axios.post(`https://io.adafruit.com/api/v2/DangLe1311/feeds/${name}/data`, data, {
            headers: headers
        })
            .then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

export default { getAll, getSingle, addSingle, removeSingle, postKey }
=======
export default { getAll, getSingle, addSingle, removeSingle }
>>>>>>> c174b0a4107f86071ce5d525764199ea9d1a716d
