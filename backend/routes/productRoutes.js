import { Router } from 'express';
import { getProducts, getProductsById } from '../controller/productController.js';

const productRoutes = Router();


productRoutes.route('/').get(getProducts);


productRoutes.route('/:id').get(getProductsById);

export default productRoutes;
