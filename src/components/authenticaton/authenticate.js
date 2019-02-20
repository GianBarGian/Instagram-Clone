import React from 'react';


export default function authenticate(Component) {
    return class Authenticate extends React.Component {
        render() {
            return <Component />
        }
    }
}