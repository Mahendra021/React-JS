import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Assets/login.css';

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="left">
                    <div>
                        <img  className="logo" src="/umwuga.svg" alt="" />
                    </div>
                    <div>
                        <img className="image" src="/login_screen.svg" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="link">
                        Already a member? 
                        <Link to="/"> Sign Up</Link>
                    </div>
                    <div className="form">
                        <h3 className="head">Sing In</h3>
                        <div className="label">
                            <label>Email</label>
                            <br/>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="label">
                            <label>Password</label>
                            <br/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="label" >
                            <button>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login