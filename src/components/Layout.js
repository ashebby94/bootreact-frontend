import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ComputerContainer from '../containers/ComputerContainer/ComputerContainer';
import FormContainer from '../containers/FormContainer/FormContainer';

class Layout extends Component {
    render() {
        return(
            <div>
                <Route 
                    path="/" exact
                    component={ComputerContainer}
                />
                <Route 
                    path="/addComputer" 
                    component={FormContainer}
                />
            </div>
        );
    }
}

export default Layout;