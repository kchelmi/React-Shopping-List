import React, { Component } from 'react';
import { FaList, FaRegPlusSquare } from 'react-icons/fa';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <FaList />
              </div>
            </div>
            <input
              type='text'
              className='form-control'
              placeholder='wpisz nazwe produktu'
              value={item}
              onChange={handleChange}
            />
          </div>

          <button
            type='submit'
            className='btn btn-block btn-primary mt-3'
            disabled={item ? false : true}
          >
            <FaRegPlusSquare /> Dodaj do listy
          </button>

          
        </form>
      </div>
    );
  }
}
