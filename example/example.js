import ORM from '../src/index.js';

class Product extends ORM.Model {
  static storageKey = 'products';
}

const product1 = new Product({ name: 'Laptop', price: 1500 });
product1.save();

const product2 = new Product({ name: 'Phone', price: 700 });
product2.save();

// Get all products as a collection
const products = Product.all();
console.log(products.map(p => p.attributes).toArray());

// Filter products by price
const expensiveProducts = products.filter(p => p.attributes.price > 1000);
console.log(expensiveProducts.toArray());

// Paginate products
const paginated = products.paginate(1, 1);
console.log(paginated.toArray());
