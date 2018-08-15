import React, {Component} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import axios from 'axios';

class FormContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            computerForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Name'
                    },
                    value: ''
                },
                location: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Location'
                    },
                    value: ''
                },
                ip: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'IP Address'
                    },
                    value: ''
                },
                mac: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'MAC Address'
                    },
                    value: ''
                },
                successMessage: false
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.computerForm) {
            formData[formElementIdentifier] = this.state.computerForm[formElementIdentifier].value;
        }

        axios.post( 'http://localhost:8080/v1/api/create', {
            name: formData.name,
            location: formData.location,
            ip: formData.ip,
            mac: formData.mac
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( response => {
           this.setState({
                computerForm: '',
                successMessage: true
           });
        })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.computerForm
        };
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({computerForm: updatedForm});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.computerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.computerForm[key]
            });
        }
        return(
            <form onSubmit={this.handleSubmit}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                {!this.state.successMessage ? <Button>SUBMIT</Button> : 'Added Successfully'}
            </form>
        );
    }
}

export default FormContainer;