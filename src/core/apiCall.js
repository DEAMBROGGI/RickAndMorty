import axios from 'axios';

export const apiCall = async (typeData, pageNumber) => {
    try {
        let apiData = await axios.get(`https://rickandmortyapi.com/api/${typeData}/?page=${pageNumber}`)
        return apiData
    }
    catch (error) {
        throw error
    }
}
export async function episodeData(episode) {
    try {
        let episodeInfo = await axios.get(episode)
        return episodeInfo
    }
    catch (error) {
        throw error
    }
}

export async function searchApi(typeData, search, pageNumber) {
    try {
        let queryResult = await axios.get(`https://rickandmortyapi.com/api/${typeData}/?page=${pageNumber}&name=${search}`)
        return queryResult
    }
    catch (error) {
        throw error
    }
}
export async function getEpisode(id) {
    try {
        let episodeSelected = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        return episodeSelected
    }
    catch (error) {
        throw error
    }
}
export async function getEpisodeCharacters(characters) {
    console.log()
    try {
        let episodeCharacters = await axios.get(`https://rickandmortyapi.com/api/character/${characters}`)
        return episodeCharacters
    }
    catch (error) {
        throw error
    }
}







