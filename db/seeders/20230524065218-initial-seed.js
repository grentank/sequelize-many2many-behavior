/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const fetches = [
      fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json()),
      fetch('https://dummyjson.com/products').then((r) => r.json()),
      fetch('https://dummyjson.com/comments').then((r) => r.json()),
    ];
    const [users, { products }, { comments }] = await Promise.all(fetches);

    await queryInterface.bulkInsert(
      'Users',
      users.slice(0, 3).map(({ name, email }) => ({ name, email })),
      {},
    );
    await queryInterface.bulkInsert(
      'Products',
      products.slice(0, 3).map(({ title, price }) => ({ title, price })),
      {},
    );
    await queryInterface.bulkInsert(
      'Reviews',
      comments.map(({ body, postId, user, id }) => ({
        body,
        productId: (postId % 3) + 1,
        userId: (user.id % 3) + 1,
        rating: id,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
