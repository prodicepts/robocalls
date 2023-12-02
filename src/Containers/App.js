import React, {Component} from "react";
import '../css/App.css';
import SearchBox from "../Components/SearchBox";
import CardList from "../Components/CardList";
// import {robots} from "../robots";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
class App extends Component {
    constructor(){
        super()
        this.state = {
            rbt : [],
            searchField : ''
        };
    }
    
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
            .then(data => {
                this.setState({
                    rbt : data
                })
            })
        
    }
    onTextChange = (e) => {
        this.setState({
            searchField: e.target.value,
        })
    }
    render(){
        if(this.state.rbt.length === 0){
            return (
                <div className="container br3 tc">
                    Loading ...
                </div>
            );
        }else{
            const filteredRobots = this.state.rbt.filter((f) => {
                return f.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            });
            return (
                    <div className="container br3 tc">
                        <SearchBox search = {this.onTextChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList rbts = {filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
            );
        }
    }
}

export default App;