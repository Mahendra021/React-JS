import { createBrowserHistory } from 'history'
import React, { Component } from 'react'
import { Upload } from '../Model/Api'
import "./Assets/detail.css"

var history = createBrowserHistory()

export class Job extends Component {

    constructor(props) {
        super(props)
    
        this.state = {      
            job: "",
            skill1 : "",
            skill2 : "",
            skill3 : ""       
        }
    }

    async hendalbutton(){
        var jsonObject ={
            "job" : this.state.job,
            "skill": {
                "1" : this.state.skill1,
                "2" : this.state.skill2,
                "3" : this.state.skill3
            }
        }

        var job = await Upload(jsonObject)
        console.log(job);

        if(this.state.job !== '' && this.state.skill1 !== ''){
            history.push('/detail')
            window.location.reload()
        }

    }

    addSkill(){
        var skill = document.createElement("input")
        skill.placeholder = "Skill"
        var list = document.getElementById("list")

        list.appendChild(skill)
    }

    render() {
        return (
            <div>
                <div className="head1" >
                    <img  className="logo" src="/umwuga.svg" alt="" />
                </div>
                <div>
                    <div className="main" >
                        <div className="title" >
                            Job Title
                            <br/>
                            <input type="text" placeholder="Job Title" onChange={(e) => { this.setState({ job: e.target.value }) }} />
                        </div>                               
                        <div className="heading" >
                            Skills
                        </div>
                        <div id="list">
                            <input type="text" placeholder="Skill" onChange={(e) => { this.setState({ skill1: e.target.value }) }} />
                            <input type="text" placeholder="Skill" onChange={(e) => { this.setState({ skill2: e.target.value }) }} />
                            <input type="text" placeholder="Skill" onChange={(e) => { this.setState({ skill3: e.target.value }) }} />
                        </div>
                        <div className="add" >
                            <button onClick={() => this.addSkill()} >Add More Skill</button>
                        </div>
                        <div className="label" >
                            <button onClick={() => this.hendalbutton()} >Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Job
