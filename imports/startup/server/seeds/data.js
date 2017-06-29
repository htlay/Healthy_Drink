import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

let data = [{
  name: 'Alo Drink',
  image: 'http://www.prevention.com/sites/prevention.com/files/styles/slideshow-desktop/public/static/alo-600x450.jpg?itok=H-vJtErA',
  price: 1.99,
  flavor: ['aloe', 'pineapple']
},
{
  name: 'PitayaPlus Super Juice',
  image: 'http://www.prevention.com/sites/prevention.com/files/styles/slideshow-desktop/public/static/pitaya-600x450.jpg?itok=aIhGCrST',
  price: 2.99,
  flavor: ['pitaya + lemon + Coconut water']
},
{
  name: 'Izze Esuqe',
  image: 'http://www.prevention.com/sites/prevention.com/files/styles/slideshow-desktop/public/static/izze-600x450.jpg?itok=5bh47UEE',
  price: 1.99,
  flavor: ['Sparkling Black Raspberry']
}
]

for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}
