const express = require('express');
const router = express.Router();

// middlewares validations
//const { authCheck, adminCheck } = require("../middlewares/auth");

// middlewares controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  listPopular,
  listByCatergory,
  productsCount,
  productStar,
  listRelated,
} = require('../controllers/product');

// routes-endpoints
router.post('/product', create);
router.get('/products/total', productsCount);
router.get('/popular/:count', listPopular);
router.get('/product/listByCategory', listByCatergory);
 

router.get('/products/:count', listAll); // products/100
router.delete('/product/:slug', remove);
router.get('/product/:slug', read);
router.put('/product/:slug', update);

router.post('/products', list);
// rating
router.put('/product/star/:productId', productStar);
// related
router.get('/product/related/:productId', listRelated);

module.exports = router;
