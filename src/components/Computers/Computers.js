import React, {Component} from 'react';
import Computer from '../Computers/Computer/Computer';
import './Computers.css';

class Computers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        let rows = [];
        this.state.data.forEach((computer) => {
            rows.push(
                <Computer 
                    key={computer.id}
                    id={computer.id}
                    name={computer.name}
                    location={computer.location}
                    ip={computer.ip}
                    mac={computer.mac}
                    date={computer.date}
                    handleDelete={this.deleteComputerHandler}
                />
            );
        });
        let count = rows.length > 0;

        return(
            <table className="table">
                {count ? <caption>LIST OF COMPUTERS</caption> : ''}
                {count ?
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>IP</th>
                            <th>MAC</th>
                            <th>Date</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>  : <caption>At the moment there are no computers</caption>
                }
            <tbody>{rows}</tbody>
            </table> 
            
        );
    }
} 

export default Computers;