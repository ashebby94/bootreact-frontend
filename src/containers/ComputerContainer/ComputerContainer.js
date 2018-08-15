import React, {Component} from 'react';
import Computers from '../../components/Computers/Computers';
import axios from 'axios';
import {Route} from 'react-router-dom';

class ComputerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            computers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/v1/api/computers')
            .then(response => {
                this.setState({
                    computers: response.data.computers
                });
            })
    }

    render() {
        return(
            <Route 
                path="/" exact
                component={() => <Computers data={this.state.computers} />}
            />
            
        );
    }
}

export default ComputerContainer;