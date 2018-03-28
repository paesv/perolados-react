import axios from 'axios'

export const GET_DOMAIN_DATA = 'GET_DOMAIN_DATA'
export const SET_DOMAIN_DATA = 'SET_DOMAIN_DATA'

export const setDomainData = (data) => {
    return {
        type: SET_DOMAIN_DATA,
        data
    }
}

export const getDomainData = () => {
    return (dispatch) => {
        axios.get('http://www.mocky.io/v2/5ab5692a300000c11e8279c2')
        .then((response) => {
            dispatch(setDomainData(response.data))
        }).catch((error) => {
            console.log(error)
        })
    }
}