import React, {Component} from 'react';
import { Link } from 'react-router';
export default class AddToCartButton extends Component {

  render() {
    return (
      <div className="row">
        <div className ="col-sm-8">
          <Link to=" /">
            <button className="btn btn-success">
                Add
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
