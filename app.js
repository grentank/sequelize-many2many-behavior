const { User, Product, Review } = require('./db/models');

const pr = (obj) => JSON.parse(JSON.stringify(obj));

// (async () => {
//   const user = await User.findOne({
//     where: {
//       id: 1,
//     },
//     include: {
//       model: Review,
//       include: {
//         model: Product,
//       },
//     },
//   });
// // Пользователь 1 имеет много ревью на один и тот же товар (например, товар productId: 1)
//   console.dir(pr(user), { depth: null });
// })();

(async () => {
  const user = await User.findOne({
    where: {
      id: 1,
    },
    include: {
      model: Product,
      through: {
        attributes: ['body'],
      },
    },
  });
  // Здесь просто показывается связь между пользователем 1 и товарами (например, к товару productId: 1 нет многих ревью). Вытащить можно текст только одного
  console.dir(pr(user), { depth: null });
})();
