import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'

class Login extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			errors: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount () {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}

		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit (e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			password: this.state.password,
		}

		this.props.loginUser(userData)
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
                                        <button type="submit" class="btn btn-primary">Login</button>
                                </form>
                      </div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(withRouter((Login)))