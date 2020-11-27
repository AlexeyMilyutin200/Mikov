import React from 'react'
import './css/RegistrationForm.css'

export default class RegistrationForm extends React.Component {
    render() {
        return(
            <div className='registration-form-container'>
                <form className='lab2-registration-form'>
                    <h1>Регистрация</h1>
                    <div className='lab2-registration-form-group'>
                        <div>
                            <label>Имя пользователя</label>
                            <input/>
                        </div>
                        <div>
                            <label>Пароль</label>
                            <input/>
                        </div>
                    </div>
                    <div className='lab2-registration-form-group'>
                        <div>
                            <label>Фамилия</label>
                            <input/>
                        </div>
                        <div>
                            <label>Имя</label>
                            <input/>
                        </div>
                        <div>
                            <label>Отчество</label>
                            <input/>
                        </div>
                    </div>
                    <div className='lab2-registration-form-group'>
                        <div>
                            <label>Дата рождения</label>
                            <input/>
                        </div>
                        <div>
                            <label>Место рождения</label>
                            <input/>
                        </div>
                        <div>
                            <label>Телефон</label>
                            <input/>
                        </div>
                    </div>
                    <div className='lab2-registration-form-group'>
                        <button onClick = {this.props.changeToLogin}>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        )
    }
}