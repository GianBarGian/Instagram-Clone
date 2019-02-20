import React from 'react';

export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    usernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    login = () => {
        localStorage.setItem('username', this.state.username);
    }

    render() {
        return (
            <form>
                <input onChange={this.usernameChange} type="text" placeholder="username" ></input>
                <input type="text" placeholder="password"></input>
                <button onClick={this.login}>Log In</button>
            </form>
        )
    }
}