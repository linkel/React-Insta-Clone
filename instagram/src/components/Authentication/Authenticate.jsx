import React from "react";
import Login from "../Login/Login";

const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn : false,
                username : null,
            }
        }
        componentDidMount() {
            if (localStorage.getItem("username")) {
                this.setState({loggedIn: true});
                this.setState({username:localStorage.getItem("username")});
            }
        }
        handleLogin = (event) => {
            event.preventDefault();
            localStorage.setItem("username",event.target[0].value);
            this.setState({loggedIn: true});
            this.setState({username:event.target[0].value});
          }
        render() {
            if (this.state.loggedIn) {
            return (
                <App username={this.state.username} />
            )
            } else {
                return (<Login handleLogin={this.handleLogin} />)
            }
        }
    }
}

export default Authenticate;