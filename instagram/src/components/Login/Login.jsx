import React from "react";

const Login = () => {
    return (
        <div className="login">
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Login;