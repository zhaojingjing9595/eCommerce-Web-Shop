import User from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';

// @desc    Auth User & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
      if (user && (await user.matchPassword(password))) {
          res.send({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
          });
      } else { 
          res.status(401)
          throw new Error ('invalid email or password!')
      }
  } catch (error) {
      console.log(error);
      next(error)
  }
};
