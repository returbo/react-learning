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

const isSearched = searchTerm => item => {
  const searchTermLow = searchTerm.toLowerCase();
  return item.title.toLowerCase().includes(searchTermLow) ||
    item.author.toLowerCase().includes(searchTermLow)
};

const Search = ({ value, onChange, children, className = "" }) =>
  <form className={className}>
    <span style={{ 'padding-right': '10px' }}>
      {children}
    </span>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>;

const Header = () =>
  <div className="table">
    <div className="table-row">
      <span style={{ width: '40%' }}>
        OBJECT
    </span>
      <span style={{ width: '30%' }}>
        AUTHOR
    </span>
      <span style={{ width: '10%' }}>
        COMMENTS
    </span>
      <span style={{ width: '10%' }}>
        POINTS
    </span>
      <span style={{ width: '10%' }} />
    </div>
  </div>

const Table = ({ list, pattern, onDismiss }) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span style={{ width: '40%' }}>
          <a href={item.url}>
            {item.title}
          </a>
        </span>
        <span style={{ width: '30%' }}>
          {item.author}
        </span>
        <span style={{ width: '10%' }}>
          {item.num_comments}
        </span>
        <span style={{ width: '10%' }}>
          {item.points}
        </span>
        <span style={{ width: '10%' }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Удалить
          </Button>
        </span>
      </div>
    )}
  </div>

const Button = ({ onClick, className = "", children }) =>
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
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            className="search-form"
          >
            Поиск
          </Search>
        </div>
        <Header />
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
