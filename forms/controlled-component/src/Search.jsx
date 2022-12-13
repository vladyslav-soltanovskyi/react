import React from "react";

class Search extends React.Component {
  state = {
    search: ''
  }
  
  onInput = ({ target }) => this.setState({ search: target.value });

  onSubmit = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.search}`);
  }

  render() {
    const { search } = this.state;
    
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="search__input"
          value={search}
          onChange={this.onInput}
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
