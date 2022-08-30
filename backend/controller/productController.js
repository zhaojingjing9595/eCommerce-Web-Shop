import Product from "../models/productModel.js";

// @desc    Fetch all product
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductsById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      console.log(product);
      res.send(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};