import React, { Component } from 'react';
import User from './User';
class Users extends Component {
    state = {
        users: [
            { name: "John", age: 20 },
            { name: "Jill", age: 30 },
            { name: "sharma", age: 40 }
        ],
        title: "users List",
    }
    handler = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        }

        )
        this.setState({
            newState
        })
    }
    //this.setState({
    //  users: [
    //    { name: "John", age: 10 },
    //  { name: "Jill", age: 20 },
    //{ name: "sharma", age: 30 }
    //],
    // })
    // }


    render() {
        return (
            <React.Fragment>
                { this.state.title}
                {
                    this.state.users.map((user) => {
                        return <User age={user.age}>{user.name}</User>
                    })
                }

                {/* <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User> */}
                <button onClick={this.handler}>
                    Make us 10 years Younger
                </button>
            </React.Fragment >


        )
    }
};
export default Users;