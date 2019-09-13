import React, { Component } from 'react';
import './App.css';

import CarList from './Components/CarList';
import TodoList from './Components/TodoList';
import List from './Components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // carList: [{ car: 'vaz2019'}, { car: 'vaz1999'}],
      // todoList: [{ todo: 'поумнеть'}, { todo: 'посмотреть сериал'}],
      carList: [{ value: 'vaz2019'}, { value: 'vaz1999'}],
      todoList: [{ value: 'поумнеть'}, { value: 'посмотреть сериал'}],
    }

  }

  render() {
    const { carList, todoList } = this.state;

    return (
        <div>
          {/*<CarList cars={carList} />*/}
          {/*<TodoList todo={todoList} />*/}
          <List data={carList} title="Car list" /*valueField="car"*/ />
          <List data={todoList} title="Todo list" /*valueField="todo"*/ />
        </div>
    )
  }

  // render() {
  //   const { list } = this.state;
  //
  //   return (
  //       <ul>
  //         {list.map(item => (
  //           <li>
  //             {item.todo}
  //             <button>изменить</button>
  //             <button>удалить</button>
  //           </li>
  //       ))}
  //       </ul>
  //   )
  // }
}

export default App;
