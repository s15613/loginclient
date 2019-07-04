import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'

class Header extends React.Component {

    handleLogout () {
		this.props.logoutUser()
	}

    render () {
        const { isAuthenticated, user } = this.props;

        const loginmenus = (
            <div className="dropdown-menu">
                <Link to='/register' className="dropdown-item">Register</Link>
                <Link to='/login' className="dropdown-item">Login</Link>
            </div>
        )

        const logoutmenus = (
            <div className="dropdown-menu">
                <Link 
                    to='/' 
                    className="dropdown-item"
                    onClick={this.handleLogout}
                    >Logout</Link>
                <Link to='#' className="dropdown-item">Profile</Link>
            </div>
        )

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">    
                <Link to='/' className="navbar-brand">LOGO</Link>
                <ul className="navbar-nav d-flex justify-content-between">
                    <li className="nav-item">
                        <Link to='#' className="nav-link">Link 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='#' className="nav-link">Link 2</Link>
                    </li>
                    <form className="form-inline" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    <li className="nav-item dropdown ml-auto">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Menu
                        </a>
                        { isAuthenticated ? logoutmenus : loginmenus }
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
})

export default connect(mapStateToProps, { logoutUser})(Header);