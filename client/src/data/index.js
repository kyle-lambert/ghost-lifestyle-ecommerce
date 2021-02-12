import colors from "../styles/colors";

export const homeCategories = [
  {
    id: 1,
    name: "Amino Acids",
    slug: "amino-acids",
    color: colors.red,
  },
  {
    id: 2,
    name: "Gamer",
    slug: "gamer",
    color: colors.navyblue,
  },
  {
    id: 3,
    name: "Greens",
    slug: "greens",
    color: colors.aqua,
  },
  {
    id: 4,
    name: "Muscle Builder",
    slug: "muscle-builder",
    color: colors.yellow,
  },
  {
    id: 5,
    name: "Pre-Workout",
    slug: "pre-workout",
    color: colors.darkGrey,
  },
  {
    id: 6,
    name: "Protein",
    slug: "protein",
    color: colors.blue,
  },
];

export const shippingReturnsInfo = [
  {
    id: 1,
    label: "Returns and Refunds Policy",
    description:
      "Thank you for shopping GHOST. If you are not 100% satisfied with your purchase, we're here to help.",
  },
  {
    id: 2,
    label: "Ghost Support",
    description:
      "GHOST Support is available weekdays 9AM-5PM central time at 1-844-GHOST-88 (446-7888) or anytime at support@ghostlifestyle.com. We do our very best to respond to support emails within 48 hours.",
  },
  {
    id: 3,
    label: "Return Policy",
    description:
      "Our products can be returned within 15 days of the original purchase of the product. To be eligible for a return, please make sure that: The product was purchased within the last 15 days. The product is unopened, in its original packaging. Apparel must be unworn, unwashed, with tag(s) and in new condition. All t-shirts are FINAL SALE, no returns or exchanges. You have the receipt, order confirmation or proof of purchase from ghostlifestyle.com. We are unable to accept returns of purchases made from third party retailers.Products that do not meet this criteria will not be considered for return.",
  },
  {
    id: 4,
    label: "International Shipping",
    description:
      "We cannot be responsible for any customs restrictions, tariffs, or other regulations that may apply in countries outside of the United States. The responsibility is yours to check to see if your country allows the shipment of products you ordered (or wish to order). Any duties or taxes that may apply to your order are also your responsibility. If for whatever reason your order is seized by customs, we will not issue you a refund (minus shipping) unless all products are returned to us in the original condition per the return policy above.",
  },
];

export const homeHeroProduct = {
  id: 5,
  name: "GREENS",
  description:
    "GHOST® GREENS combines 19 individually sourced Greens and Reds with a full 100mg dose of Spectra™, Prebiotics, 10 Billion CFU Probiotic and the super-premium BioCore® Optimum Complete Digestive Enzymes.",
  price: 44.99,
  slug: "greens",
  published_at: "2020-12-01T04:35:03.487Z",
  created_at: "2020-12-01T04:35:00.083Z",
  updated_at: "2020-12-01T04:35:03.526Z",
  flavours: [
    {
      id: 15,
      name: "Guava Berry",
      image: {
        id: 17,
        name: "guava-berry.png",
        alternativeText: "",
        caption: "",
        width: 1080,
        height: 1080,
        formats: {
          large: {
            ext: ".png",
            url:
              "https://ghost-ecommerce.s3.us-east-2.amazonaws.com/large_guava_berry_0d24a88a1f.png",
            hash: "large_guava_berry_0d24a88a1f",
            mime: "image/png",
            name: "large_guava-berry.png",
            path: null,
            size: 826.77,
            width: 1000,
            height: 1000,
          },
          small: {
            ext: ".png",
            url:
              "https://ghost-ecommerce.s3.us-east-2.amazonaws.com/small_guava_berry_0d24a88a1f.png",
            hash: "small_guava_berry_0d24a88a1f",
            mime: "image/png",
            name: "small_guava-berry.png",
            path: null,
            size: 254.81,
            width: 500,
            height: 500,
          },
          medium: {
            ext: ".png",
            url:
              "https://ghost-ecommerce.s3.us-east-2.amazonaws.com/medium_guava_berry_0d24a88a1f.png",
            hash: "medium_guava_berry_0d24a88a1f",
            mime: "image/png",
            name: "medium_guava-berry.png",
            path: null,
            size: 505.61,
            width: 750,
            height: 750,
          },
          thumbnail: {
            ext: ".png",
            url:
              "https://ghost-ecommerce.s3.us-east-2.amazonaws.com/thumbnail_guava_berry_0d24a88a1f.png",
            hash: "thumbnail_guava_berry_0d24a88a1f",
            mime: "image/png",
            name: "thumbnail_guava-berry.png",
            path: null,
            size: 38.39,
            width: 156,
            height: 156,
          },
        },
        hash: "guava_berry_0d24a88a1f",
        ext: ".png",
        mime: "image/png",
        size: 803.14,
        url: "https://ghost-ecommerce.s3.us-east-2.amazonaws.com/guava_berry_0d24a88a1f.png",
        previewUrl: null,
        provider: "aws-s3",
        provider_metadata: null,
        created_at: "2020-12-01T04:34:22.545Z",
        updated_at: "2020-12-01T04:34:22.557Z",
      },
    },
  ],
  details: [
    {
      id: 16,
      label: "GHOST® Full Disclosure Label",
      description:
        "All GHOST® products feature a 100% transparent label that fully discloses the dose of each active ingredient. Zero proprietary blends means you know what you’re getting in each and every scoop.",
    },
    {
      id: 17,
      label: "4.3G Greens",
      description:
        "Not all greens are created equal! We individually sourced each one of the 10 greens to ensure maximum purity and a clean, crisp flavor and used only the best, nutrient dense ingredients we could find including Organic Cracked Cell Wall Chlorella (because ‘regular’ Chlorella just doesn’t cut it for GHOST), Organic Matcha and Organic Spirulina.",
    },
    {
      id: 18,
      label: "2.2G Reds",
      description:
        "Fruits. Superfoods. Reds. Whatever you know them as, they're full of phytonutrients called polyphenols and carotenoids that contain a broad spectrum of antioxidants. Reds are just as important to get in as greens, and even though most brands skimp on them because they're expensive, GHOST pulled out all the stops with 9 premium super foods including Jabuticaba (fun to say and super good for you!), Camu Camu (the fruit so nice they named it twice) and Organic Goji Berry.",
    },
    {
      id: 19,
      label: "Spectra™",
      description:
        "The Spectra™ Total ORAC Blend is a clinically studied super antioxidant formula of fruits, vegetables, and herbs. Spectra™ was the first ingredient of its kind scientifically proven to inhibit free radical production, optimize cellular metabolic activity, and increase nitric oxide levels (for those veggie pumps). Spectra™ was clinically studied at GHOST’s 100mg dose—don’t accept any less!*",
    },
    {
      id: 20,
      label: "Prebiotics",
      description:
        "Prebiotics like inulin, which is naturally found in chicory root, are used in the gut to increase the amount of healthy, good bacteria, aid digestion and enhance your body’s production of valuable vitamins. Science.*",
    },
    {
      id: 21,
      label: "Probiotics",
      description:
        "10 Billion CFUs legends! We worked hand in hand with the premier producer of probiotics to deliver a comprehensive, shelf stable probiotic formula headlined by DE111. DE111 is a clinically studied probiotic strain (at GHOST's 5 billion CFU dose) shown to deliver digestive and immune benefits.*",
    },
    {
      id: 22,
      label: "Digestive Enzymes",
      description:
        "GHOST broke out the big guns here! Biocore® Optimum Complete is usually sold standalone because it’s the freakin’ cadillac of digestive enzyme blends. “BOC” (as we call it at HQ) helps ensure the highest degree of nutrient absorption, containing a comprehensive arsenal of enzymes to break down carbohydrates, refined sugars, proteins and fats.*",
    },
  ],
};

export const footerShopRoutes = [
  {
    name: "Protein",
    path: "/products?category=protein",
  },
  {
    name: "Pre-Workout",
    path: "/products?category=pre-workout",
  },
  {
    name: "Amino Acids",
    path: "/products?category=amino-acids",
  },
  {
    name: "Greens",
    path: "/products?category=greens",
  },
];

export const footerInformationRoutes = [
  {
    name: "Contact Us",
    path: "/",
  },
  {
    name: "Privary",
    path: "/",
  },
  {
    name: "Shipping & Returns",
    path: "/",
  },
  {
    name: "Payments",
    path: "/",
  },
];

export const footerSocialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ghostlifestyle",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ghostlifestyle",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/GhostLifestyle",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com.au/ghostlifestyle/_shop",
  },
];
