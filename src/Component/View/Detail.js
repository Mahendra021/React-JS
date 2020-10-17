import React, { Component } from 'react'
import { Data, Upload } from '../Model/Api'
import "./Assets/detail.css"

export class Detail extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            description:'React is an open-source, front end, JavaScript library for building user interfaces or UI components.It is maintained by Facebook and a community of individual developers and companies.',
            name : '',
            email : ''
        }
    }

    async componentDidMount(){

        var user = await Data()

        this.setState({
            name : user.data.first_name + " " + user.data.last_name,
            email : user.data.email
        })
    }

    async updatedesc(){
        var jsonObject ={
            description : this.state.description
        }

        var description = await Upload(jsonObject)
        console.log(description);
    }

    render() {
        return (
            <div>
                <div className="head1" >
                    <img  className="logo" src="/umwuga.svg" alt="" />
                </div>
                <div className="main" >
                    <div>
                        <div className="name" >
                            Name : {this.state.name}
                        </div>
                        <div className="email" >
                            Email : {this.state.email}
                        </div>
                        <div className="desc" >
                            Description
                            <br/>
                            <textarea value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} ></textarea>
                        </div>
                    </div>
                    <div className="label" >
                        <button onClick ={ () => this.updatedesc()}>Update Description</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail
