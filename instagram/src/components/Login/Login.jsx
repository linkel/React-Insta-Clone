import React from "react";
import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 3vh;
`;

const FormContainer = styled.div`
    max-width: 349px;
    width: 100%;
`;

const LoginContainer = styled.div`
    margin: 30px 0 0 0;
    width: 100%;
    height: 352px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    `;

const ImageContainer = styled.div`
    width: 54%;
    margin: 21px auto;
    `;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 6px 10%;
`;

const InputText = styled.input`
    height: 33px;
    margin: 0 0 7px 0;
    padding: 0 0 0 9px;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    font-size: 14px;
`;

const LoginButton = styled.input`
    height: 32px;
    background: #3f95ef;
    color: #fff;
    opacity: .65;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

const Login = (props) => {
    return (
        <Wrapper>
        <FormContainer>
            <LoginContainer>
                <ImageContainer>
                    <Image alt="instagram" src={require('../../img/instagram.jpg')}/>
                </ImageContainer>
                <LoginForm onSubmit={props.handleLogin} >
                    <InputText type="text" placeholder="Username"/>
                    <InputText type="text" placeholder="Full Name"/>
                    <InputText type="text" placeholder="Password"/>
                    <LoginButton type="submit" value="Log In"></LoginButton>
                </LoginForm>
            </LoginContainer>
        </FormContainer></Wrapper>
    )
}



export default Login;