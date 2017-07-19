import React, {Component} from 'react';
import { Link } from 'react-router';
export default class ProductHolder extends Component {

  render() {
    let p = this.props.product;
    return (
      <div className="col-sm-3">
        <Link to={'/product/'+p._id}>
          <img height="" className="img-responsive" src={p.image}/>
          <h2 className="text-center">{p.name}</h2>
        </Link>
        <h2 className="text-center">${p.price}</h2>
      </div>

    )
  }
}
