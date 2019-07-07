import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class FormStart extends React.Component {
	componentDidMount () {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	
	render () {
		const { values, handleChange, handleSubmit, touched, errors, handleBlur } = this.props
		return (
			<div className="container col-4">
					<form onSubmit={handleSubmit}>
							<div className="form-group">
									<label htmlFor="email">Email:</label>
									<input 
											type="email" 
											className="form-control" 
											id="email" 
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											name="email"
											placeholder="Enter your email"
									/>
									{ errors.email && touched.email && ( <span className="redtext">{errors.email}</span>) }
							</div>
							<div className="form-group">
									<label htmlFor="pwd">Password:</label>
									<input 
											type="password" 
											className="form-control" 
											id="pwd" 
											name="password" 
											placeholder="Enter your Password"
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
									/>
                                    { errors.password && touched.password && ( <span className="redtext">{errors.password}</span>) }
							</div>
							<button type="submit" className="btn btn-primary">Login</button>
					</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(withRouter(FormStart))