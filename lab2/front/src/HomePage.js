import React from 'react'

export default class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Пользователь</h1>
                <div>
                    <label>Имя пользователя:</label>
                    <div></div>
                    <label>Фамилия:</label>
                    <div></div>
                    <label>Имя:</label>
                    <div></div>
                    <label>Отчество:</label>
                    <div></div>
                    <label>Дата рождения:</label>
                    <div></div>
                    <label>Место рождения:</label>
                    <div></div>
                    <label>Телефон:</label>
                    <div></div>
                </div>
                <div>
                    <h1>Услуги</h1>
                    <div>
                        <label>Сменить пароль:</label>
                        <div>
                            <button>Сменить пароль</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}