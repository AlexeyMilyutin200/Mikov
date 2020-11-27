import React from 'react'
import './css/NavBar.css'

export default class NavBar extends React.Component {


    render() {
        return (
            <div className='navbar'>
                <span className='logo'>
                    <img src="img/logo.jpg" alt="Логотип"/>
                </span>
                {this.props.page !== 'login' && this.props.page !== 'registration' && (
                    <ul className="navbar-list">
                        <li>{this.props.user.username}</li>
                        <li><a>Выйти</a></li>
                    </ul>
                )}
                {this.props.page === 'login' && (
                    <ul className="navbar-list">
                    </ul>
                )}
            </div>
        )
    }
}