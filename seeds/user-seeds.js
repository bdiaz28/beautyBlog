const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'brittany1',
    email: 'britt@email.com',
    password: 'password'
  },
  {
    username: 'lily2',
    email: 'lily@email.com',
    password: 'password'
  },
  {
    username: 'leo3',
    email: 'leo@email.com',
    password: 'password'
  },
  {
    username: 'ricky2',
    email: 'ricky@email.com',
    password: 'password'
  },
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;