import React from "react";

const Login = (props) => {
    return (
        <div className="login">
            <form onSubmit={props.handleLogin} >
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Login;