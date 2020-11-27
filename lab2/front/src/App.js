import React from 'react'
import NavBar from './NavBar'
import Content from './Content'
import Footer from './Footer'

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.changeToHome = this.changeToHome.bind(this)
        this.changeToRegistration = this.changeToRegistration.bind(this)
        this.changeToLogin = this.changeToLogin.bind(this)
        this.state.jwt = localStorage.getItem('jwt')
        if (this.state.jwt == null) {
            this.state.page = 'login'
        }
        else {
            this.state.page = 'home'
        }
    }

    state = {
        page: 'login',
        jwt: '',
        user: null
    }

    changeToRegistration() {
        this.setState({
            page:'registration'
        })
    }

    changeToHome() {
        this.getUser()
        this.setState({
            page:'home'
        })
    }

    changeToLogin() {
        this.setState({
            page:'login'
        })
    }

    getUser() {
        this.setState({
            user: {username: 'Alex'}
        })
    }

    render() {
        return (

            <div className="structure">
                {this.state.page === 'login' ? <NavBar page={this.state.page}/> : <NavBar page={this.state.page} user={this.state.user}/>}
                <Content page={this.state.page} changeToHome={this.changeToHome} changeToRegistration={this.changeToRegistration} changeToLogin={this.changeToLogin} user={this.props.user}/>
                <Footer/>
            </div>
        )
    }
}
