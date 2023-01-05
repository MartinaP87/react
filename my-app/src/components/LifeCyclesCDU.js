import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild';

export class LifeCyclesCDU extends Component {
    constructor (props) {
        console.log("Constructor called")
        super(props);
        this.state = {
            greetings: "Hello!"
        }
    }
    updateGreeting = () =>{
        console.log("Update greeting called")
        this.setState(prevState => {
            return {
                greetings: prevState.greetings === "Hello!" ? "Goodbye!" : "Hello!"
            }
        })
    }
    componentDidUpdate() {
        console.log("Component updated")
    }
  render() {
    console.log("Render method called")
    return (
      <div>
        <h1>{this.state.greetings}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greetings}/>
    </div>
    )
  }
}

export default LifeCyclesCDU