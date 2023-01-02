import React from "react";

const FunctionalGreetingWithProps = (props) =>{
    console.log(props);
    return <h1>Hello, {props.greeting} {props.name}! You are {props.age} years old</h1>;
}


export default FunctionalGreetingWithProps;