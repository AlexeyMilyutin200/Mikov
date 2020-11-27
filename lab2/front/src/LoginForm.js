import React from 'react'
import './css/LoginForm.css'

export default class LoginForm extends React.Component {

    render() {
        return (
            <div className='login-form-container'>
                <form className='lab2-login-form'>
                    <h1>Авторизация</h1>
                    <div>
                        <label>Имя пользователя</label>
                        <input/>
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input/>
                    </div>
                    <div>
                        <button onClick = {this.props.changeToHome}>Войти</button>
                        <div className='registration-link'>
                            <a onClick = {this.props.changeToRegistration}>Registration</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}