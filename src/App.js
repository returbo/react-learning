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

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onClickMe() {
    console.log(this);
  }

  onDismiss(id) {
    const updateList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updateList });
  }

  render() {
    const { list, searchTerm} = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={this.onSearchChange}
          />
        </form>

        {list.filter(isSearched(searchTerm))
          .map(item =>
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

        <button
          onClick={this.onClickMe}
          type="button"
        >Нажми на меня
      </button>
      </div>
    );
  }
}

export default App;
