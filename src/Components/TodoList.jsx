import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        console.log(this.props);

        const { todo } = this.props;

        return (
            <div>
                <h3>todo list</h3>
                <ul>
                    {todo.map(i => (
                        <li key={i.value}>{i.value}</li>
                    ))}
                </ul>
            </div>
        )
    };
}


export default TodoList;
