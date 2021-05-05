const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {initializeDBConnection} = require('./db/db.connect.js');

const productsRoute = require('./routes/products.router.js');
const categoriesRoute = require('./routes/categories.router.js');
const cartRoute = require('./routes/cart.router.js');
const wishlistRoute = require('./routes/wishlist.router.js');
const addressesRoute = require('./routes/addresses.router.js');

const {requestLogger} = require('./middleware/requestLogger.middleware.js');
const {authInterceptor} = require('./middleware/authInterceptor.middleware.js');
const {route404Handler, errorHandler}  = require('./middleware/errorHandler.middleware.js');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(requestLogger);

// called before any route handler
initializeDBConnection();

app.use('/products', productsRoute)
app.use('/categories', categoriesRoute)
app.use('/cart', cartRoute)
app.use('/wishlist', wishlistRoute)
app.use('/addresses', addressesRoute)

app.get('/', (req, res) => {
  res.json({message: "Welcome to LumosFit"});
});

/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use(route404Handler)
/**
 * Error Handler
 * Don't move : Has to be at end
 */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('server started on port:', PORT);
});