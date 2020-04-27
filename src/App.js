import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'JS Lerning',
    url: '#',
    author: 'Erick Gukalov',
    num_comments: 0,
    points: 0,
    objectID: 2,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updateList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updateList});
  }

  render() {
    return ( 
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} -</a>
            </span>
            <span> {item.author}</span>
            <div>Comments: {item.num_comments}</div>
            <div>Points: {item.points}</div>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Отбросить
              </button>
            </span>
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default App;
