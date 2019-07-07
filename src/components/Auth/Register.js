import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import RegisterStart from  './RegisterStart'

const schema = Yup.object().shape({
	email: Yup
	 .string()
	 .email("Email not valid")
         .required("Email is required"),
         username: Yup
	 .string()
         .required("Email is required")
         .min(4,"Username must have min 4 characters")
	 .max(10,"Username must have max 10 characters"),
	password: Yup
	 .string()
	 .min(6,"Password must be at least 6")
	 .max(30,"Password too long")
         .required("Password is required"),
         password2: Yup
	 .string()
         .required("Confirm password is required")
         .oneOf([Yup.ref('password')], 'Password must match')
})

class Register extends React.Component {
	handleSubmit = (values, actions) => {
		this.props.registerUser(values, this.props.history, actions.setErrors)
        }
        
	render () {
		return (
                        <Formik
                                initialValues={{
                                        email: '',
                                        username: '',
                                        password: '',
                                        password2: ''
                                }}
                                validationSchema={schema}
                                onSubmit={this.handleSubmit}
                                render={(props) => <RegisterStart {...props} />}
                        />
		)
	}
}

export default connect(null, { registerUser })(Register)