"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    // const { address, amount, dishes, token, city, state } = ctx.request.body;

    // const charge = await stripe.charges.create({
    //   // Transform cents to dollars.
    //   amount: amount * 100,
    //   currency: "usd",
    //   description: `Order ${new Date()} by ${ctx.state.user._id}`,
    //   source: token,
    // });

    // // Register the order in the database
    // const order = await strapi.services.order.add({
    //   user: ctx.state.user._id,
    //   address,
    //   amount,
    //   dishes,
    //   city,
    //   state,
    // });

    return "created order";
  },
};
