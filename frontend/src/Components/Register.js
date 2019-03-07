import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/Register.css';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            disabledButton: false,
            redirect: false
        }
    }

    usernameHandler = event => {
        this.setState({
            username: event.target.value
        })
    };
    firstNameHandler = event => {
        this.setState({
            firstName: event.target.value
        })
    };
    lastNameHandler = event => {
        this.setState({
            lastName: event.target.value
        })
    };
    emailHandler = event => {
        this.setState({
            email: event.target.value
        })
    };
    passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
    };

    createUser = () => {
        this.setState({disabledButton: true});
        axios.post("/api/register-repo", {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        })
        .then(() => {
            this.setState({
                disabledButton: false,
                redirect: true
            });
        })  // error handling to include username taken
            .catch(err => {
                this.setState({disabledButton: false});
                alert("Username already taken, please try another");
                console.log(err)
            })
    };
    render(){
        if (this.state.redirect){
            return <Redirect to={"/profile"}/>
        }
        return (
            <div className="reg-container">
                <div className="reg-header">
                    <h1>Sign up for awesomeness!</h1>
                </div>
                <div className="log-in-cont">
                    <div className="email-cont register-cont">
                        <div className="email-label-cont">
                            <label htmlFor="register-email">E-mail:</label>
                        </div>
                        <div className="email-input-cont">
                            <input type="email" name="email" id={"register-email"} minLength={"4"} onChange={this.emailHandler} value={this.state.email} required/>
                        </div>
                    </div>
                    <div className="register-username-cont register-cont">
                        <div className="user-label-cont">
                            <label htmlFor="register-username">Username:</label>
                        </div>
                        <div className="register-user-input-cont">
                            <input type="text" name="username" id={"register-username"} minLength={"4"} onChange={this.usernameHandler} value={this.state.username} required/>
                        </div>
                    </div>
                    <div className="register-pass-cont register-cont">
                        <div className="register-pass-label-cont">
                            <label htmlFor="register-password">Password:</label>
                        </div>
                        <div className="register-pass-input-cont">
                            <input type="password" name="register-password" id={"register-password"} minLength={"6"} onChange={this.passwordHandler} value={this.state.password} required/>
                        </div>
                    </div>
                    <div className="register-first-name-cont register-cont">
                        <div className="user-label-cont">
                            <label htmlFor="register-first-name">First Name:</label>
                        </div>
                        <div className="register-user-input-cont">
                            <input type="text" name="first-name" id={"register-first-name"} minLength={"4"} onChange={this.firstNameHandler} value={this.state.firstName} required/>
                        </div>
                    </div>
                    <div className="register-last-name-cont register-cont">
                        <div className="user-label-cont">
                            <label htmlFor="register-last-name">Last Name:</label>
                        </div>
                        <div className="register-user-input-cont">
                            <input type="text" name="last-name" id={"register-last-name"} minLength={"4"} onChange={this.lastNameHandler} value={this.state.lastName} required/>
                        </div>
                    </div>
                    <div className="register-submit-cont">
                        <button className={"btn"} id={"register-button"} onClick={this.createUser} disabled={this.state.disabledButton}>Sign Up!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;