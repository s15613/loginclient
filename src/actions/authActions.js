import axios from 'axios'
import jwt_decode from 'jwt-decode'
import * as types from '../constants'
import setAuthHeader from '../utils/setAuthHeader'

axios.defaults.baseURL = 'https://loginserverapi.herokuapp.com/api/users'

export const loginUser = (userData, setErrors) => dispatch => {
	axios.post('/login', userData)
		.then(res => {
			const { token } = res.data 
			localStorage.setItem('jwtToken', token)
			setAuthHeader(token)
			const decoded = jwt_decode(token)
			dispatch(setCurrentUser(decoded))
		})
		.catch(err => {
			setErrors({...err.response.data})
			dispatch({
				type: types.GET_ERRORS,
				payload: err.response.data
			})
		})
}

export const registerUser = (userData, history, setErrors) => dispatch => {
	axios.post('/register', userData)
		.then(res => history.push('/login'))
		.catch(err => {
			setErrors({...err.response.data})
			dispatch({
				type: types.GET_ERRORS,
				payload: err.response.data
			})
		})
}

export const setCurrentUser = (data) => {
	return {
		type: types.SET_CURRENT_USER,
		payload: data
	}
}

export const logoutUser = () => dispatch => {
	localStorage.removeItem('jwtToken')
	setAuthHeader()
	dispatch(setCurrentUser({}))
}