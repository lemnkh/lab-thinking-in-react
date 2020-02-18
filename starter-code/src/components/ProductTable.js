import React, { Component } from 'react';
import ProductRow from './ProductRow.js';

class ProductTable extends Component {
  render() {
    return (
      <div className="ProductTable">
        <table className="supertable">
            <th>
                <td><b>Name</b></td>
                <td><b>Price</b></td>
            </th>
            <tr>
              {this.props.products.map((prod) => <ProductRow key={prod.id} product={prod} /> )}
            </tr>
        </table>
      </div>
    );
  }
}

export default ProductTable;
