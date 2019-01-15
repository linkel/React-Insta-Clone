import React from "react";
import Login from "../Login/Login";

const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn : false,
            }
        }
        handleLogin = (event) => {
            event.preventDefault();
            localStorage.setItem("username",event.target[0].value);
            this.setState({loggedIn: true});
          }
        render() {
            if (this.state.loggedIn) {
            return (
                <App />
            )
            } else {
                return (<Login handleLogin={this.handleLogin} />)
            }
        }
    }
}

export default Authenticate;