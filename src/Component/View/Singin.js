import { createBrowserHistory } from 'history'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Upload } from '../Model/Api'
import "./Assets/singin.css"

var history = createBrowserHistory()

export class Singin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email:"",
            password:""
        }
    }

    async hendalSubmit(){
        var jsonObject = {
            "name" : this.state.name,
            "email": this.state.email,
            "password": this.state.password
        }

        var user = await Upload(jsonObject)
        console.log(user);

        if(this.state.email !== '' && this.state.name !== '' && this.state.password !== ''){
            history.push('/job')
            window.location.reload()
        }

    }
    
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
                        <Link to="/login"> Sign in</Link>
                    </div>
                    <div className="form">
                        <h3 className="head">Sing Up</h3>
                        <div className="label">
                            <label>Full Name</label>
                            <br/>
                            <input type="text" placeholder="Full Name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </div>
                        <div className="label">
                            <label>Email</label>
                            <br/>
                            <input type="email" placeholder="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </div>
                        <div className="label">
                            <label>Password</label>
                            <br/>
                            <input type="password" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </div>
                        <div className="label" >
                            <button type="submit" onClick={ () => this.hendalSubmit()}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singin
