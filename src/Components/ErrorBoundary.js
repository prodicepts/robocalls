import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
            errorMsg : ''
        };
    }
    componentDidCatch(error, info){
        this.setState({
            hasError : true,
            errorMsg : info
        })
    }
    render(){
        if(this.state.hasError){
            return <h3>Error Occured!!!</h3>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;