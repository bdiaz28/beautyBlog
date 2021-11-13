const { Post } = require('../models');

const postdata = [
  {
    title: 'Jaclyn Roxanne?!?!',
    post_content: 'new line?!?! my thoughts!',
    user_id: 1
  },
  {
    title: 'Sephora Holiday Sale',
    post_content: "here's what I think you should get!",
    user_id: 1
  },
  {
    title: 'Ulta',
    post_content: 'new stores!',
    user_id: 3
  },
  {
    title: 'Target',
    post_content:'mini ultas in stores!',
    user_id: 2
  },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;