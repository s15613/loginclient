import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormStart from './FormStart'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'

const schema = Yup.object().shape({
	email: Yup
	 .string()
	 .email("Email not valid")
	 .required("Email is required"),
	password: Yup
	 .string()
	 .min(6,"Password must be at least 6")
	 .max(30,"Password too long")
	 .required("Password is required")
})

class Login extends React.Component {
	
	handleSubmit = (values, actions) => {
		this.props.loginUser(values, actions.setErrors)
	 }

	render () {
		return (
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={schema}
				onSubmit={this.handleSubmit}
				render={(props) => <FormStart {...props} />}
			/>
		)
	}
}

export default connect(null, { loginUser })(Login)