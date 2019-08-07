import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"


type State = {
    path: string
    pattern: string
}

class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            path: "/Users/panuchaisrirak/src/search-ts",
            pattern: "*.json"
        }
    }

    onClick = (e) => {
        console.log("Hello, world!");
        let {path,pattern} = this.state;
        axios.post("http://localhost:5000/api/search/searchFile", {
            path: path,
            pattern: pattern
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });;
    }

    render() {
        return (
            <h1 onClick={this.onClick}>Hello, world!</h1>
            
        )
    }
}

var root = document.getElementById("root")
ReactDOM.render(<App />, root);