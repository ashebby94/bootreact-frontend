import React, {Component} from 'react';
import axios from 'axios';
import './Computer.css';

class Computer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            location: this.props.location,
            ip: this.props.ip,
            mac: this.props.mac,
            date: this.props.date,
            remove: ''
        }
    }

    handleDelete = (event) => {
        
        axios.delete('http://localhost:8080/v1/api/delete/' + this.state.id)
        this.setState({
            remove: 'removeRow'
        })
    }

    render() {
        return(
                <tr className={this.state.remove}>
                    <td>{this.state.name}</td>
                    <td>{this.state.location}</td>
                    <td>{this.state.ip}</td>
                    <td>{this.state.mac}</td>
                    <td>{this.state.date}</td>
                    <td>
                        <button onClick={this.handleDelete}>Delete</button>
                    </td>
                </tr>
        );
    }
}

export default Computer;