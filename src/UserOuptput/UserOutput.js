import React, { Component } from "react";
import './UserOutput.css'

class UserOutput extends Component {
    render() {
        return (
            <div className="User">
                <p>This is a test for user {this.props.username}</p>
                <p>This is another test for user {this.props.username}</p>
            </div>
        )
    }
}

export default UserOutput;