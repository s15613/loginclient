import axios from 'axios'
import * as types from '../constants'
import setAuthHeader from '../utils/setAuthHeader'

export const loginUser = (userData) => dispatch => {
	axios.post('http://localhost:5000/api/users/login', userData)
		.then(res => {
			const { token } = res.data 
			localStorage.setItem('jwtToken', token)
			setAuthHeader(token)
			dispatch(getCurrentUser())
		})
		.catch(err => {
			dispatch({
				type: types.GET_ERRORS,
				payload: err.response.data
			})
		})
}

export const registerUser = (userData, history) => dispatch => {
	axios.post('http://localhost:5000/api/users/register', userData)
		.then(res => history.push('/login'))
		.catch(err => dispatch({
			type: types.GET_ERRORS,
			payload: err.response.data
		}))
}

export const getCurrentUser = () => dispatch => {
	axios.get('http://localhost:5000/api/users')
		.then(res => dispatch(setCurrentUser(res.data)))
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
	dispatch(setCurrentUser())
}