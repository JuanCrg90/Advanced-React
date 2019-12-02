const { forwardTo } = require('prisma-binding');

const Query = {
  // Prisma bindings way
  items: forwardTo('db'),
  // Manual Way
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
