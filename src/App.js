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
  {
    title: 'Logic and Science',
    url: '#',
    author: 'Andrew Zubkov',
    num_comments: -3,
    points: -100,
    objectID: 3,
  },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const Search = ({ value, onChange, children, className = "" }) =>
  <form className={className}>
    {children}
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>;

const Table = ({ list, pattern, onDismiss }) =>
  <div>
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table">
        <span>
          <a href={item.url}>{item.title} -</a>
        </span>
        <span> {item.author}</span>
        <div>Comments: {item.num_comments}</div>
        <div>Points: {item.points}</div>
        <span>
          <Button
            onClick={() => onDismiss(item.objectID)}
          >
            Удалить
              </Button>
        </span>
      </div>
    )}
  </div>

const Button = ({ onClick, className = "remove-button", children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const updateList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updateList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="app">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          className="search-form"
        >
          Поиск
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}


export default App;
