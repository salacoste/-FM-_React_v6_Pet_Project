import { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    constructor() {
        super()
    }

    componentDidCatch(err, info) {
        console.error(`Error is happened`, err, info)
    }

    componentDidMount() {
        if(this.state.hasError) {
            setTimeout(()=>{
                this.setState({ redirect: true })
            }, 5000)
        }
    }


    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/" />
            )
        }
        if(this.state.hasError === true) {
            return (
                <Fragment>
                    <h1>Error</h1>
                    <p>Ooops! Error is occuered here. <Link to={"/"}>Click here</Link> to go to Main Page.</p>
                </Fragment>
            )
        }
        return this.props.children

    }

}

export default ErrorBoundary