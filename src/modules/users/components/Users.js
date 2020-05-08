import React from 'react';
import config from 'reactor/config';
import { Link } from 'react-router-dom';
import ReactorComponent from 'reactor/component/reactor.component';

export default class Users extends ReactorComponent {
    state = {
        number: 1,
    };

    init() {
    }

    render() {
        return (
            <div id="container">
                <Link to="/">Back to Home</Link>
                <h1 onClick={() => this.setState({ number: this.state.number + 1 })}>Hello, Users {config.get('name.first')}</h1>

                <h1>Current Number: {this.state.number}</h1>
            </div>
        );
    }
}