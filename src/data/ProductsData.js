const productsData = [
  {
    id: "p1",
    name: "Classic Navy Wool Suit",
    category: "Suits",
    season: "Winter 2026",
    price: 450.0,
    discount: 15, // 15% off
    images: [
      "https://images.unsplash.com/photo-1594932224456-7496bc43389a?q=80&w=800&auto=format&fit=crop", // Front
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop", // Back
    ],
    description:
      "Tailored from premium Italian wool, this suit offers a sharp silhouette for the modern London gentleman.",
    isNew: true,
  },
  {
    id: "p2",
    name: "Silk Evening Gown - Crimson",
    category: "Dresses",
    season: "Summer 2026",
    price: 290.0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop", // Front
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop", // Back
    ],
    description:
      "An elegant floor-length gown crafted from 100% pure silk. Perfect for gala events.",
    isNew: true,
  },
  {
    id: "p3",
    name: "Oversized Cotton Tee",
    category: "T-Shirts",
    season: "All Season",
    price: 45.0,
    discount: 10,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    ],
    description:
      "Heavyweight organic cotton tee with a relaxed fit and dropped shoulders.",
    isNew: false,
  },
  {
    id: "p4",
    name: "Checkered Slim-Fit Trousers",
    category: "Pants",
    season: "Autumn 2026",
    price: 85.0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1624371414361-e6e8ea01c1e6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    ],
    description:
      "Classic pattern with a contemporary slim cut. Features hidden waistband details.",
    isNew: true,
  },
  {
    id: "p5",
    name: "Leather Chelsea Boots",
    category: "Accessories",
    season: "Winter 2026",
    price: 180.0,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605733160413-677ed301ceaf?q=80&w=800&auto=format&fit=crop",
    ],
    description:
      "Handcrafted genuine leather boots with durable elastic side panels.",
    isNew: false,
  },
];

export { productsData as products };
