const productsData = [
  // UNSTITCHED COLLECTION
  {
    id: "unst-01",
    name: "3 Piece Luxury Lawn Unstitched Suit",
    category: "Unstitched",
    season: "Summer-26",
    price: 8500,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800",
    ],
    description: "Intricate embroidery on premium lawn fabric.",
  },
  {
    id: "unst-02",
    name: "2 Piece Printed Cotton Karandi",
    category: "Unstitched",
    season: "Spring-26",
    price: 4200,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1606132205545-2c8c49f87424?q=80&w=800",
    ],
    description: "Perfect for daily spring wear.",
  },

  // SALE COLLECTION
  {
    id: "sale-01",
    name: "Embroidered Chiffon Evening Wear",
    category: "Pret",
    season: "Winter-25",
    price: 15000,
    discount: 0, // 50% OFF
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
    ],
    description: "Grand winter clearance sale.",
  },
  {
    id: "sale-02",
    name: "Classic Silk Tunic",
    category: "Pret",
    season: "All Season",
    price: 6000,
    discount: 25, // 25% OFF
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800",
    ],
    description: "Limited time discount.",
  },
  // ... existing products ...
  {
    id: "u1",
    name: "3 Piece Embroidered Lawn Unstitched",
    category: "Unstitched",
    season: "Summer-26",
    price: 8500,
    discount: 15,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800",
      "https://i.imgur.com/fallback.png",
    ],
    description: "Premium lawn with chiffon dupatta.",
  },
  {
    id: "u2",
    name: "2 Piece Printed Unstitched Suit",
    category: "Unstitched",
    season: "Summer-26",
    price: 4500,
    discount: 0,
    isSale: false,
    images: [
      "https://images.unsplash.com/photo-1606132205545-2c8c49f87424?q=80&w=800",
    ],
    description: "Daily wear printed collection.",
  },
  {
    id: "s1",
    name: "Luxury Silk Couture",
    category: "Pret",
    season: "Winter-25",
    price: 12000,
    discount: 0,
    isSale: false,
    images: [
      "https://images.unsplash.com/photo-1594932224456-7496bc43389a?q=80&w=800",
    ],
    description: "Exclusive winter clearance.",
  },
  {
    id: "p1",
    name: "SOORAJ MUKHI U",
    fabric: "Printed Lawn",
    category: "2-piece",
    season: "Summer 2026",
    featured: true,
    bestSelling: false,
    isSoldOut: false,
    price: 450.0,
    color: "Yellow",
    discount: 0,
    images: [
      "https://www.chinyere.pk/cdn/shop/files/CS0513_06f26977-c47f-45ca-86f7-7bfeb13848ed_1066x.jpg?v=1773656534", // Front
      "https://www.chinyere.pk/cdn/shop/files/CS0513_4_a723f02b-66dc-4952-b7a1-42015e68b593_large.jpg?v=1773656534", // Back
    ],
    description:
      "3 Piece Suit The pack suit includes printed piece for shirt and trouser embroidered lawn dupatta and organza patch for dupatta.",
    isNew: true,
  },

  {
    id: "p2",
    name: "Silk Evening Gown - Crimson",
    color: "Crimson Red",
    fabric: "100% Pure Silk",
    category: "Dresses",
    season: "Summer",
    price: 290.0,
    discount: 0,
    bestSelling: true,
    isSoldOut: true,
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
    color: "Off-White",
    fabric: "Organic Cotton",
    name: "Oversized Cotton Tee T-Shirt",
    season: "summer",
    category: "3-piece",
    featured: true,
    bestSelling: false,
    price: 45.0,
    isSoldOut: false,
    discount: 0,
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
    color: "Black & White",
    fabric: "Wool Blend",
    name: "Checkered Slim-Fit Trousers",
    category: "Pants",
    season: "winter",
    price: 85.0,
    isSoldOut: false,
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
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p6",
    name: "Leather Chelsea Boots",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p7",
    name: "Leather Chelsea Boots",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p8",
    name: "Leather Chelsea Boots",
    category: "Accessories",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p9",
    name: "Leather Chelsea Boots",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p10",
    name: "Leather Chelsea Boots",
    category: "Accessories",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p11",
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
  {
    id: "p12",
    name: "Leather Chelsea Boots",
    category: "Accessories",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p13",
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
  {
    id: "p14",
    name: "Leather Chelsea Boots",
    category: "Accessories",
    color: "Dark Brown",
    fabric: "Genuine Leather",
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
  {
    id: "p15",
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
  {
    id: "p16",
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
  {
    id: "p17",
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
  {
    id: "p18",
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
  {
    id: "p19",
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
  {
    id: "p20",
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
  {
    id: "p21",
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
  {
    id: "p22",
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
  {
    id: "p23",
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
  {
    id: "p24",
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
  {
    id: "p25",
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
  {
    id: "p26",
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
  {
    id: "p27",
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
  {
    id: "p28",
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
  {
    id: "p29",
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
  {
    id: "p30",
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
  {
    id: "p31",
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
  {
    id: "p32",
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
  {
    id: "p33",
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
  {
    id: "p34",
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
  {
    id: "p35",
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
  {
    id: "p36",
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
  {
    id: "p37",
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
  {
    id: "p38",
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
  {
    id: "p39",
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
  {
    id: "p40",
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
