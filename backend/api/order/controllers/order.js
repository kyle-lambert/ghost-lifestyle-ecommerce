"use strict";

const stripe = require("stripe")(
  "sk_test_51Hlmr7JNvmgYa7E8O5vHj5LIQQO2k9eN4qAEmNZjovwIVNzd0tz3vIxNrzVa4PSb6v3osizgBJ0dypqW57TNEWy200q7lYpelX"
);

const YOUR_DOMAIN = "http://localhost:3000/checkout";
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = module.exports = {
  create: async (ctx) => {
    const generateLineItems = () => {
      const shoppingCart = ctx.request.body.shoppingCart;
      const lineItems = [];

      shoppingCart.forEach((item) => {
        lineItems.push({
          price_data: {
            currency: "aud",
            product_data: {
              name: item.product.name,
              description: `Flavour: ${item.options.flavour.name}`,
            },
            unit_amount: item.product.price * 100,
          },
          quantity: item.options.qty,
        });
      });
      return lineItems;
    };

    const lineItems = generateLineItems();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [...lineItems],
      mode: "payment",

      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    return { id: session.id };
  },
};
