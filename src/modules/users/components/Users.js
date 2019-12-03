import React, {Component} from 'react';


export default class Users extends Component {
    render() {
        return (
            <div>
                {this.isOK &&
                    <h1>Thanks</h1>
                }
                {this.users}
                <h1>Hello, Users</h1>
            </div>
        );
    }
}