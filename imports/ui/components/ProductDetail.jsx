import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
import { Link } from 'react-router';
import accounting from 'accounting';
export default class ProductDetail extends Component {

  render() {
    let product = this.props.product;

    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
              <img height="500px" width="500px" className="img-thumbnail" src={product.image}/>
          </div>
          <div className="col-sm-8">
            <p>
              <strong>Product Name: </strong>
              {product.name}
            </p>
            <p>
              <strong>Flavor: </strong>
              {product.flavor}
            </p>
            <p>
              <strong>Price: </strong>
              {accounting.formatMoney(product.price)}
            </p>
            <AddToCartButton/>
          </div>
        </div>

      </div>
    )
  }
}
