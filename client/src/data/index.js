// Home category images
import AminoAcids from "../assets/images/amino_acids_trio.png";
import Gamer from "../assets/images/gamer_trio.png";
import Greens from "../assets/images/greens_trio.png";
import MuscleBuilder from "../assets/images/muscle_builder_trio.png";
import PreWorkout from "../assets/images/pre-workout_trio.png";
import Protein from "../assets/images/protein_trio.png";

import colors from "../styles/colors";

export const homeCategories = [
  {
    id: 1,
    name: "Amino Acids",
    slug: "amino-acids",
    imageSrc: AminoAcids,
    color: colors.red,
  },
  {
    id: 2,
    name: "Gamer",
    slug: "gamer",
    imageSrc: Gamer,
    color: colors.navyblue,
  },
  {
    id: 3,
    name: "Greens",
    slug: "greens",
    imageSrc: Greens,
    color: colors.aqua,
  },
  {
    id: 4,
    name: "Muscle Builder",
    slug: "muscle-builder",
    imageSrc: MuscleBuilder,
    color: colors.yellow,
  },
  {
    id: 5,
    name: "Pre-Workout",
    slug: "pre-workout",
    imageSrc: PreWorkout,
    color: colors.darkGrey,
  },
  {
    id: 6,
    name: "Protein",
    slug: "protein",
    imageSrc: Protein,
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
  id: 8,
  name: "Gamer X Sour Patch Kids",
  description:
    "GHOST® GAMER delivers an EPIC combo of brain-boosting nootropics and natural energy to ensure you're dialed for an afternoon on the sticks or at the office.",
  price: 39.99,
  slug: "gamer-x-sour-patch-kids",
  category: {
    id: 5,
    name: "Gamer",
    published_at: "2020-10-08T04:02:53.950Z",
    created_at: "2020-10-08T04:02:52.302Z",
    updated_at: "2020-10-11T07:13:36.992Z",
  },
  published_at: "2020-10-08T04:55:47.977Z",
  created_at: "2020-10-08T04:55:42.312Z",
  updated_at: "2020-10-11T07:15:08.036Z",
  flavours: [
    {
      id: 24,
      name: "SOUR PATCH KIDS® Redberry",
      stock_count: 100,
      image: {
        id: 26,
        name: "sour-patch-kids-redberry.png",
        alternativeText: "",
        caption: "",
        width: 1080,
        height: 1080,
        formats: {
          thumbnail: {
            name: "thumbnail_sour-patch-kids-redberry.png",
            hash: "thumbnail_sour_patch_kids_redberry_58f5f23d69",
            ext: ".png",
            mime: "image/png",
            width: 156,
            height: 156,
            size: 35.31,
            path: null,
            url: "/uploads/thumbnail_sour_patch_kids_redberry_58f5f23d69.png",
          },
          large: {
            name: "large_sour-patch-kids-redberry.png",
            hash: "large_sour_patch_kids_redberry_58f5f23d69",
            ext: ".png",
            mime: "image/png",
            width: 1000,
            height: 1000,
            size: 702.19,
            path: null,
            url: "/uploads/large_sour_patch_kids_redberry_58f5f23d69.png",
          },
          medium: {
            name: "medium_sour-patch-kids-redberry.png",
            hash: "medium_sour_patch_kids_redberry_58f5f23d69",
            ext: ".png",
            mime: "image/png",
            width: 750,
            height: 750,
            size: 434.08,
            path: null,
            url: "/uploads/medium_sour_patch_kids_redberry_58f5f23d69.png",
          },
          small: {
            name: "small_sour-patch-kids-redberry.png",
            hash: "small_sour_patch_kids_redberry_58f5f23d69",
            ext: ".png",
            mime: "image/png",
            width: 500,
            height: 500,
            size: 219.86,
            path: null,
            url: "/uploads/small_sour_patch_kids_redberry_58f5f23d69.png",
          },
        },
        hash: "sour_patch_kids_redberry_58f5f23d69",
        ext: ".png",
        mime: "image/png",
        size: 676.81,
        url: "/uploads/sour_patch_kids_redberry_58f5f23d69.png",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        created_at: "2020-10-08T04:53:37.999Z",
        updated_at: "2020-10-08T04:53:38.010Z",
      },
    },
  ],
  details: [
    {
      id: 34,
      label: "GHOST® Full Disclosure Label",
      description:
        "All GHOST® products feature a 100% transparent label that fully discloses the dose of each active ingredient. Zero proprietary blends means you know what you’re getting in each and every scoop.",
    },
    {
      id: 37,
      label: "nooLVL®",
      description:
        "nooLVL® is a patented ingredient, found exclusively in GHOST® GAMER, that boosts cognitive performance and energy in gamers. nooLVL® is the first dietary ingredient of its kind to be clinically studied in eSports athletes to significantly improve visual attention, accuracy and reaction time. n00b or not, at a full 1600MG (per two scoops), nooLVL® will help you level up in and out of the game.*",
    },
    {
      id: 38,
      label: "L-Tyrosine",
      description:
        "L-Tyrosine is a free-form amino acid which rapidly crosses the blood-brain barrier. With regards to performance, tyrosine’s main benefit is its ability to increase the synthesis of multiple neurotransmitters and enhance dopamine, epinephrine and norepinephrine levels. Studies have found that tyrosine supplementation can improve mood and enhance focus. At a full 1000MG (per two scoops) in GHOST® GAMER, we're pretty confident you'll be dialed in for every session*",
    },
    {
      id: 39,
      label: "Cognizin® Citicoline",
      description:
        "Cognizin® is the third member of our #braingains trifecta and is a patented brain health ingredient that supports attention, focus and brain energy at a single-scoop serving (250MG per scoop). Cognizin® has also been shown to reduce errors while on task…in other words, the aforementioned pancake dropping into Verdansk should be few and far between (the buildings come out of nowhere, we get it).*",
    },
    {
      id: 35,
      label: "Natural Caffeine",
      description:
        "GHOST® GAMER contains 150MG of Natural Caffeine (per two scoops) for just the right amount of energy and no crash.*",
    },
    {
      id: 36,
      label: "AstraGin®",
      description:
        "AstraGin® works to help improve your body's ability to absorb key amino acids, proteins and glucose...in other words, AstraGin® ensures you're getting maximum benefit from everything we've packed into GHOST® GAMER.*",
    },
  ],
};

export const footerShopRoutes = [
  {
    name: "Protein",
    path: "/",
  },
  {
    name: "Pre-Workout",
    path: "/",
  },
  {
    name: "Amino Acids",
    path: "/",
  },
  {
    name: "Fat Burner",
    path: "/",
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
    href: "#",
  },
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "Twitter",
    href: "#",
  },
  {
    name: "Pinterest",
    href: "#",
  },
];
