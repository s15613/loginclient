import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends React.Component {
    componentDidMount () {
		if(this.props.auth.isAuthenticated) {
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
                                            placeholder="Enter email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="email"
                                    />
                                    { errors.email && touched.email && ( <span className="redtext">{errors.email}</span>) }
                            </div>
                            <div className="form-group">
                                    <label htmlFor="username">User name:</label>
                                    <input 
                                            type="text" 
                                            className="form-control" 
                                            id="username" 
                                            placeholder="Enter username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="username"
                                    />
                                    { errors.username && touched.username && ( <span className="redtext">{errors.username}</span>) }
                            </div>
                            <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input 
                                            type="password" 
                                            className="form-control" 
                                            id="pwd" 
                                            placeholder="Enter password" 
                                            name="password" 
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                    />
                                    { errors.password && touched.password && ( <span className="redtext">{errors.password}</span>) }
                            </div>
                            <div className="form-group">
                                    <label htmlFor="pwd2">Repeat password:</label>
                                    <input 
                                            type="password" 
                                            className="form-control" 
                                            id="pwd2" 
                                            placeholder="Repeat password" 
                                            name="password2" 
                                            value={values.password2}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                    />
                                    { errors.password2 && touched.password2 && ( <span className="redtext">{errors.password2}</span>) }
                            </div>
                            <button type="submit" className="btn btn-primary">Sign up</button>
                    </form>
            </div>
		)
	}
}

const mapStateToProps = (state) => ({
        auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Register))