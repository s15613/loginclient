import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'

class Register extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			email: '',
			username: '',
			password: '',
			password2: '',
			errors: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}
	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit (e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
			password2: this.state.password2
		}

		this.props.registerUser(userData, this.props.history)
	}
	render () {
		const { errors } = this.state 
		return (
                        <div class="container col-4">
                                <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                                <label for="email">Email:</label>
                                                <input 
                                                        type="email" 
                                                        class="form-control" 
                                                        id="email" 
                                                        placeholder="Enter email"
                                                        value={this.state.email}
                                                        onChange={this.handleChange}
                                                        name="email"
                                                        // helperText={errors.email ? errors.email : ''}
                                                        // error={errors.email ? true : false } 
                                                />
                                        </div>
                                        <div class="form-group">
                                                <label for="username">User name:</label>
                                                <input 
                                                        type="text" 
                                                        class="form-control" 
                                                        id="username" 
                                                        placeholder="Enter username"
                                                        value={this.state.username}
                                                        onChange={this.handleChange}
                                                        name="username"
                                                        // helperText={errors.email ? errors.email : ''}
                                                        // error={errors.email ? true : false } 
                                                />
                                        </div>
                                        <div class="form-group">
                                                <label for="pwd">Password:</label>
                                                <input 
                                                        type="password" 
                                                        class="form-control" 
                                                        id="pwd" 
                                                        placeholder="Enter password" 
                                                        name="password" 
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                />
                                        </div>
                                        <div class="form-group">
                                                <label for="pwd2">Repeat password:</label>
                                                <input 
                                                        type="password" 
                                                        class="form-control" 
                                                        id="pwd2" 
                                                        placeholder="Repeat password" 
                                                        name="password2" 
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Sign up</button>
                                </form>
                        </div>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter((Register)))