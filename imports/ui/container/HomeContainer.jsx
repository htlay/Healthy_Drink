import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import Home from '/imports/ui/pages/Home.jsx';

export default createContainer((props) => {
  const productSub = Meteor.subscribe('list_products');
  let selector = {};
  const products = Products.find(selector).fetch();

  return {
    products: products,
    loading: !productSub.ready()
  };
}, Home);
