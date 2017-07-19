import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
import { Link } from 'react-router';
import accounting from 'accounting';
import StarRating from 'star-rating-react';
import AddReview from '../Reviews/AddReview.jsx';
import ProductReviews from '../Reviews/ProductReviews.jsx';

export default class ProductDetail extends Component {

  render() {
    let {product, reviews} = this.props;

    return (
        <div className ="container">
          <div className="row">
            {/* <div className="col-sm-6"> */}
            <div className="text-center">
              <img src={product.image} />
              <h2 className="text-center">{product.name}</h2>
              {/* <img height="300px" width="300px" className="img-thumbnail" src={product.image}/> */}
              <h2 className="text-center">{accounting.formatMoney(product.price)}</h2>
              <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
          <div className="text-center">
            {/* <p>
              <strong>Product Name: </strong>
              {product.name}
            </p>

            <p>
              <strong>Price: </strong>
              {accounting.formatMoney(product.price)}
            </p> */}
            {/* <AddToCartButton/> */}
            <AddReview product={product} />
            <ProductReviews reviews={reviews}/>
          </div>
        </div>
          )
  }
}
