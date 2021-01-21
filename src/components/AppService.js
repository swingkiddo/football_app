import axios from 'axios'

const API_URL = 'http://u0362146.plsk.regruhosting.ru'

export default class AppService {
    getMatches = () => {
        const url = `${API_URL}/match`
        return axios.get(url).then(res => res.data)
    }

    getLeagues = () => {
        const url = `${API_URL}/league`
        return axios.get(url).then(res => res.data)
    }

    getCountries = () => {
        const url = `${API_URL}/country`
        return axios.get(url).then(res => res.data)
    }
}