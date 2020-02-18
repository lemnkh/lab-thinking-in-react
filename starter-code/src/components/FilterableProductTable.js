import React, { Component } from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';

class FilterableProductTable extends Component {
  
  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar  />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
