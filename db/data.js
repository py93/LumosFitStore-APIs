const faker = require('faker');

const categories = [
  "Bars",
  "Benches",
  "Weights",
  "Plates",
  "Dumbells",
  "Weight Lifting Belts"
];

const products = [...Array(30)].map((_) => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.random.arrayElement([...categories]),
    image: faker.random.image(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
    inStock: faker.random.boolean()
}));

//TODO: remove this mock data
const addresses = [...Array(5)].map((_) => ({ 
          id: faker.random.uuid(),
          fullName: faker.name.findName(),
          addressLine1: faker.address.streetName(),
          addressLine2: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.country(),
          zipCode: faker.address.zipCode(),
          contactNo: faker.phone.phoneNumber()
        }));
      
const cart = products.map((product)=> ({...product, cartQty:1, status:{exists:false}}));
console.log(JSON.stringify(cart));
const wishlist = [];

module.exports = {products, addresses, cart, wishlist}