import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import products from './data/products.js';
import users from './data/user.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

dotenv.config();
connectDB();

const destroyData = async () => { 
try {
     await User.deleteMany();
     await Product.deleteMany();
    await Order.deleteMany();
     console.log('Data Destroyed!'.red.inverse);
     process.exit();
} catch (error) {
     console.log(`Error: ${error}`.red.inverse);
     process.exit(1);
}
}

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[ 2 ] === '-d') {
    destroyData();
} else { 
    importData();
}


