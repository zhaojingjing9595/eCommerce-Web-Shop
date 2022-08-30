import { Router } from 'express';
import { getProducts, getProductsById } from '../controller/productController.js';

const productRoute = Router();


productRoute.route('/').get(getProducts);


productRoute.route('/:id').get(getProductsById);

export default productRoute;
