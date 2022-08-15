import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Joe',
    email: 'john@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Joe',
    email: 'jane@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jingjing Zhao',
    email: 'jingjing@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;