import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    var notStocked = "";

    if (this.props.product.stocked === false) {
      notStocked = "red"
    }

    return (
      <div className="ProductRow">
        <td>
          <span style={{color: notStocked}}>{this.props.product.name}</span>
        </td>

        <td>
          {this.props.product.price}
        </td>
      </div>
    );
  }
}

export default ProductRow;
