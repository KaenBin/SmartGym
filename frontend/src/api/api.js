import client from "./client"

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
    data = { "token": token, "name": name}
    try {
        return await client.post('/MyExercise/add-exercise', data).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const removeSingle = async (token, name) => {
    data = { "token": token, "name": name}
    try {
        return await client.delete('/MyExercise/delete-exercise', {data: data}).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

export default { getAll, getSingle, addSingle, removeSingle }