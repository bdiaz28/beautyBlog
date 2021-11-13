const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 1
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 3
  },
  {
    content: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 4
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 4,
    post_id: 2
  },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;