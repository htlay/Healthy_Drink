import React, {Component} from 'react';

export default class ProductEdit extends Component {
  render() {
    let product = this.props.product;
    let updateProduct = () => {
      let name = this.refs.name.value.trim();
      let photo = this.refs.photo.value.trim();
      let price = this.refs.price.value;
      // let flavor = this.refs.flavor.value.trim();
      // let volume = this.refs.volume.value.trim();

      // console.warn('id ', this.props.prodcut._id);
      // console.log('name', name);
      // console.log('description', description);

      let updateProduct = {
        name: name,
        photo: photo,
        price: price,

      }
      Meteor.call("updateProduct", product._id,  updateProduct, function(error, result){
        if(result === 'success'){
              console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });
    }
    return (
      <div>
        <div className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input ref="name" type="text" className="form-control" id="inputName" placeholder="Product Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhoto" className="col-sm-2 control-label">Photo</label>
              <div className="col-sm-10">
                <input ref="photo" type="text" className="form-control" id="inputPhoto" placeholder="Product Photo"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPrice" className="col-sm-2 control-label">Price</label>
              <div className="col-sm-10">
                <input ref="price" type="number" className="form-control" id="inputPrice" placeholder="Product Price"/>
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="inputFlavor" className="col-sm-2 control-label">Flavor</label>
              <div className="col-sm-10">
                <input ref="flavor" type="text" className="form-control" id="inputFlavor" placeholder="Product Flavor" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputVolume" className="col-sm-2 control-label">Volume</label>
              <div className="col-sm-10">
                <input ref="volume" type="text" className="form-control" id="inputVolume" placeholder="Product Volume" />
              </div>
            </div> */}
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button onClick ={updateProduct} type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
