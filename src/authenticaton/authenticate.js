import React from 'react';

export default function authenticate(App, Login) {
    return class Authenticate extends React.Component {
        state = {
            isAuthed: false,
        }

        componentDidMount() {
            const username = localStorage.getItem('username');
            if (username) {
                this.setState({
                    isAuthed: true,
                })
            }
        }


        render() {
            if(this.state.isAuthed) {
                return <App {...this.props} />
            }
            return <Login />
        }
    }
}