import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', hits: [] };
  }

  onChange = event => {
    this.setState({ query: event.target.value });
  };

  onSearch = event => {
    event.preventDefault();

    const { query } = this.state;

    if (query === '') {
      return;
    }

    const cachedHits = localStorage.getItem(query);

    if (cachedHits) {
      this.setState({ hits: JSON.parse(cachedHits) });
    } else {
      fetch('http://localhost:5000/search2?query=' + query)
        .then(response => response.json())
        .then(result => this.onSetResult(result, query));
    }
  };

  onSetResult = (result, key) => {
    localStorage.setItem(key, JSON.stringify(result.hits));

    this.setState({ hits: result.hits });
  };

  render() {
    return (
      <div>
      

        {/* Search Input */}
        <form onSubmit={this.onSearch}>
          <input type="search" onChange={this.onChange} name="search" />
          <button type="submit">Search</button>
        </form>

        {/* Result */}
        {this.state.hits.map(item => (
          <div key={item.objectID}>{item.title}</div>
        ))}
      </div>
    );
  }
}
