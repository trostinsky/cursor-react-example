import React from "react";

export default class InputController extends React.Component{
    changeInput(fieldName, event){
        const value = event.target.value;
        this.setState({
            [fieldName]: value
        })
    }
}