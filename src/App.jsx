import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
                deadline: 'July 23, 2080',
                newDeadline: ''
            }
        }

        changeDeadline(){
           //console.log('state', this.state);
           this.setState({deadline: this.state.newDeadline});
        }


    render(){

    return(
        <div className="App">
            <div className="App-title">
                CountDown to {this.state.deadline} 
            </div>
            <Clock deadline={this.state.deadline}/>
            <Form inline>
            <FormControl
                className="Deadline-input"
                onChange={event => this.setState({newDeadline: event.target.value})} 
                placeholder="new date"
                />
            <Button className="btn btn-success" onClick={ () => this.changeDeadline() }>
             Submit
            </Button>
            </Form>
        </div>
            )
    }
}


export default App;