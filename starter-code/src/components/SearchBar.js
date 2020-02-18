import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    searchInput: ""
  }
  // taper dans input change states

  handleSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })

    // remonter la nouvelle valeur du state (prop passée par le parent)
    
  }

  // dans chaque changement de state, comparer ce qu'il y a dans input
  // avec ce qui existe dans la base de données

  // on filtre pour ne garder/afficher que ce qui matche

  render() {
    return (
      <div className="SearchBar">
        <p>Search</p>
        <input type="text" className="search-bar" value={this.state.searchInput} onChange={e => this.handleSearchInput(e)}></input><br/><br/>
        <input type="checkbox" className="check"></input> Only show products on stock
      </div>
    );
  }
}

export default SearchBar;
