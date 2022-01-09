import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SocialLinks from './components/SocialLinks';
import './index.css';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  clearList = (e) => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 my-5'>
              <h3 className='text-center  '>Zrób Zakupy</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
        <SocialLinks />
      </>
    );
  }
}

export default App;
