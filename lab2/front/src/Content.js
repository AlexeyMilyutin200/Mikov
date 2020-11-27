import React from 'react'
import './css/Content.css'
import LoginForm from './LoginForm'
import HomePage from './HomePage'
import RegistrationForm from './RegistrationForm'


export default class Content extends React.Component {

    render() {
        return(
            <div className="content">
                {this.props.page === 'login' && (
                    <LoginForm changeToHome={this.props.changeToHome} changeToRegistration={this.props.changeToRegistration}/>
                )}
                {this.props.page === 'home' && (
                    <HomePage user={this.props.user}/>
                )}
                {this.props.page == 'registration' && (
                    <RegistrationForm />
                )}
            </div>
        )
    }
}