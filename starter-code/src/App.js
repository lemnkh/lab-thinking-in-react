import React, { Component } from 'react';
import './App.css';
import json from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  state = {
    products: json.data
  }

  render() {
    console.log("this.state.products", this.state.products);
    return (
      <div className="App">
        <FilterableProductTable products={ this.state.products } />
      </div>
    );
  }
}

export default App;
