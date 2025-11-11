export interface Review {
  user: string;
  rating: number;
  comment: string;
  images: string[];
  videos: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  oldPrice: string;
  price: string;
  quantity: number;
  color: string;
  size: string;
  inStock: boolean;
  OnSale: boolean;
  category: string;
  productSellingCategory: "top-rating" | "best-selling" | "on-selling";
  rating: number;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: "SKU-WST-GRY-101",
    title: "Men's Classic Grey Textured Waistcoat (Nehru Jacket)",
    description:
      "Add a touch of sophistication to your ensemble with this classic Men's Grey Textured Waistcoat. Featuring a sleek mandarin collar, a five-button front placket, and two functional welt pockets. This regular-fit Nehru jacket is crafted from a high-quality, breathable fabric, making it perfect for festive occasions, parties, or as a smart-casual layer over a crisp shirt.",
    images: ["/products/product-1.png"],
    oldPrice: "Rs 1500",
    price: "Rs 850",
    quantity: 1,
    color: "Grey",
    size: "M",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "top-rating",
    rating: 4.5,
    reviews: [
      {
        user: "Rohan S.",
        rating: 5,
        comment:
          "Excellent fit and great quality fabric. Looks very premium and is comfortable to wear all day. Received many compliments!",
        images: ["/products/product-1.png"],
        videos: [],
      },
      {
        user: "V. Patel",
        rating: 4,
        comment:
          "Good waistcoat for the price. The grey color is exactly as shown in the picture. The fit is slightly on the regular side, not slim fit, but still looks good.",
        images: ["/products/product-1.png"],
        videos: [],
      },
      {
        user: "Amit Kumar",
        rating: 4.5,
        comment:
          "Very stylish and versatile. I paired it with a white shirt and blue jeans, just like the photo, and it looked great for a family function.",
        images: ["/products/product-1.png"],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-WST-BEN-102",
    title: "Men's Modern Beige Solid Waistcoat (Nehru Jacket)",
    description:
      "Elevate your style with this Men's Modern Beige Solid Waistcoat. This piece features a refined mandarin collar, a classic five-button closure with stylish gold-tone buttons, and three functional pockets (one breast, two lower). Made from a comfortable and durable fabric, this regular-fit Nehru jacket is an ideal choice for smart-casual events, festive gatherings, or layering over a patterned shirt.",
    images: ["/products/product-2.png"],
    oldPrice: "Rs 1500",
    price: "Rs 850",
    quantity: 1,
    color: "Beige",
    size: "M",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "on-selling",
    rating: 4.4,
    reviews: [
      {
        user: "Manish P.",
        rating: 5,
        comment:
          "The beige color is very elegant and the material feels high quality. The buttons add a nice premium touch. Very happy with this purchase.",
        images: ["/products/product-2.png"],
        videos: [],
      },
      {
        user: "Sameer V.",
        rating: 4,
        comment:
          "Fits well and is very comfortable. It's a versatile jacket that works for both casual and semi-formal occasions. Good value for money.",
        images: ["/products/product-2.png"],
        videos: [],
      },
      {
        user: "Deepak Sharma",
        rating: 4.5,
        comment:
          "I bought this for a friend's engagement party and it looked fantastic. The solid beige color is easy to pair with different shirts. Recommended.",
        images: ["/products/product-2.png"],
        videos: [],
      },
      {
        user: "Vikram",
        rating: 4,
        comment:
          "The jacket is nice, but the fit is a bit more 'regular' than 'slim'. If you are looking for a tight fit, order a size down. Quality is good otherwise.",
        images: ["/products/product-2.png"],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-SHT-BLSTR-103",
    title: "Men's Classic Blue & White Vertical Stripe Casual Shirt",
    description:
      "Stay sharp and comfortable with this Men's Classic Vertical Stripe Casual Shirt. Featuring a timeless blue and white pinstripe pattern, this long-sleeve shirt is crafted from a breathable cotton-blend fabric. It includes a standard spread collar, a full button-down placket, and a convenient patch pocket on the left chest. The regular fit ensures all-day comfort, making it a versatile addition to your wardrobe, perfect for pairing with jeans or chinos.",
    images: [
      "/products/product-3.1.png",
      "/products/product-3.4.png",
      "/products/product-3.3.png",
      "/products/product-3.2.png",
    ],
    oldPrice: "Rs 1200",
    price: "Rs 599",
    quantity: 1,
    color: "Blue & White Stripe",
    size: "S",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "top-rating",
    rating: 4.6,
    reviews: [
      {
        user: "Karan T.",
        rating: 5,
        comment:
          "Love this shirt! The fit is perfect, and the fabric is really soft and breathable. The stripes look even better in person. Great for a casual day out.",
        images: [
          "/products/product-3.1.png",
          "/products/product-3.4.png",
          "/products/product-3.3.png",
          "/products/product-3.2.png",
        ],
        videos: [],
      },
      {
        user: "Rajesh M.",
        rating: 4.5,
        comment:
          "Finally found a striped shirt that fits my build well. It's not too tight and not too baggy. The quality is solid for the price. A classic look.",
        images: [
          "/products/product-3.1.png",
          "/products/product-3.4.png",
          "/products/product-3.3.png",
          "/products/product-3.2.png",
        ],
        videos: [],
      },
      {
        user: "Anil",
        rating: 4,
        comment:
          "Good shirt, but the material is a bit thinner than I expected. It's great for summer, but maybe not for cooler weather. Still looks good and the color is nice.",
        images: [
          "/products/product-3.1.png",
          "/products/product-3.4.png",
          "/products/product-3.3.png",
          "/products/product-3.2.png",
        ],
        videos: [],
      },
      {
        user: "Prakash B.",
        rating: 5,
        comment:
          "A classic shirt that everyone should have. Easy to wash, and it doesn't wrinkle too much. I've worn it to the office on a casual Friday and also for a Sunday brunch. Very versatile.",
        images: [
          "/products/product-3.1.png",
          "/products/product-3.4.png",
          "/products/product-3.3.png",
          "/products/product-3.2.png",
        ],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-SHT-OLV-104",
    title: "Men's Solid Olive Green Casual Shirt",
    description:
      "Discover timeless style with this Men's Solid Olive Green Casual Shirt. Made from a durable and comfortable cotton-blend fabric, this shirt features a classic spread collar, a full button placket, and a single chest pocket for a touch of utility. The versatile olive color and regular fit make it an essential wardrobe staple, easy to dress up with chinos or down with your favorite pair of jeans.",
    images: [
      "/products/product-4.1.png",
      "/products/product-4.2.png",
      "/products/product-4.3.png",
    ],
    oldPrice: "Rs 1200",
    price: "Rs 599",
    quantity: 1,
    color: "Olive Green",
    size: "S",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "best-selling",
    rating: 4.4,
    reviews: [
      {
        user: "Sunil Y.",
        rating: 5,
        comment:
          "The olive color is fantastic, exactly as pictured. Fabric is sturdy and feels like it will last a long time. Great fit for a casual look.",
        images: [
          "/products/product-4.1.png",
          "/products/product-4.2.png",
          "/products/product-4.3.png",
        ],
        videos: [],
      },
      {
        user: "Ajay K.",
        rating: 4,
        comment:
          "Good solid shirt for daily wear. The material is a bit stiff at first but gets softer after a wash. Happy with the purchase.",
        images: [
          "/products/product-4.1.png",
          "/products/product-4.2.png",
          "/products/product-4.3.png",
        ],
        videos: [],
      },
      {
        user: "Nitin Sawant",
        rating: 4.5,
        comment:
          "I'm very particular about the shade of olive green, and this one is perfect. It's not too bright and not too dull. Fit is also comfortable.",
        images: [
          "/products/product-4.1.png",
          "/products/product-4.2.png",
          "/products/product-4.3.png",
        ],
        videos: [],
      },
      {
        user: "R. Kumar",
        rating: 4,
        comment:
          "A decent shirt for the price. The pocket is useful and the stitching is clean. A good staple item.",
        images: [
          "/products/product-4.1.png",
          "/products/product-4.2.png",
          "/products/product-4.3.png",
        ],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-WST-BLK-105",
    title: "Men's Classic Black Utility Waistcoat (Nehru Jacket)",
    description:
      "Step up your layering game with this Men's Classic Black Waistcoat. This versatile Nehru jacket features a stylish mandarin collar, a five-button front, and three functional utility pockets with buttoned flaps (one chest, two lower). Crafted from a durable fabric, this regular-fit jacket adds a sharp, structured look to any casual or semi-formal outfit.",
    images: ["/products/product-5.png"],
    oldPrice: "Rs 1500",
    price: "Rs 850",
    quantity: 1,
    color: "Black",
    size: "M",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "best-selling",
    rating: 4.5,
    reviews: [
      {
        user: "Arjun R.",
        rating: 5,
        comment:
          "Fantastic jacket! The black is very sharp, and I love the flap pockets. It gives it a slightly different look than the usual waistcoats. Great fit and quality.",
        images: ["/products/product-5.png"],
        videos: [],
      },
      {
        user: "Mohan K.",
        rating: 4.5,
        comment:
          "A very stylish and practical waistcoat. The pockets are functional, and the fit is comfortable. Looks great over a kurta or a shirt.",
        images: ["/products/product-5.png"],
        videos: [],
      },
      {
        user: "Priya S.",
        rating: 4,
        comment:
          "Good product. The fabric is a bit thick, which is good for mild winters but maybe not for hot summer days. Overall, a solid purchase.",
        images: ["/products/product-5.png"],
        videos: [],
      },
      {
        user: "Sandeep",
        rating: 5,
        comment:
          "Bought this for a wedding event, and it was perfect. The black is deep and rich, and it looks very elegant. Fits true to size.",
        images: ["/products/product-5.png"],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-SHT-YLW-106",
    title: "Men's Mustard Yellow Textured Casual Shirt",
    description:
      "Upgrade your casual look with this Men's Mustard Yellow Textured Shirt. Crafted from a unique, breathable textured fabric, this shirt offers both style and comfort. It features a classic spread collar, a full button placket, and a convenient patch pocket on the chest. The versatile color and regular fit make it an excellent choice for pairing with jeans or chinos for any relaxed occasion.",
    images: [
      "/products/product-6.2.png",
      "/products/product-6.1.png",
      "/products/product-6.3.png",
    ],
    oldPrice: "Rs 1200",
    price: "Rs 599",
    quantity: 1,
    color: "Mustard Yellow",
    size: "S",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "top-rating",
    rating: 4.5,
    reviews: [
      {
        user: "Ravi K.",
        rating: 5,
        comment:
          "Love the texture of this shirt! The color is unique and I've gotten several compliments. It's very soft and comfortable too. A great buy.",
        images: [
          "/products/product-6.2.png",
          "/products/product-6.1.png",
          "/products/product-6.3.png",
        ],
        videos: [],
      },
      {
        user: "S. Ghosh",
        rating: 4,
        comment:
          "Nice shirt, the color is as shown. The texture is interesting. Only thing is the fabric is a bit on the thinner side, good for summer. Fit is as expected.",
        images: [
          "/products/product-6.2.png",
          "/products/product-6.1.png",
          "/products/product-6.3.png",
        ],
        videos: [],
      },
      {
        user: "Alok Verma",
        rating: 4.5,
        comment:
          "This is my new favorite casual shirt. The textured material looks premium, and the fit is just right. It's perfect for a day out with friends.",
        images: [
          "/products/product-6.2.png",
          "/products/product-6.1.png",
          "/products/product-6.3.png",
        ],
        videos: [],
      },
      {
        user: "Manoj",
        rating: 4.5,
        comment:
          "Good quality and great style. The fabric feels different in a good way. Recommended.",
        images: [
          "/products/product-6.2.png",
          "/products/product-6.1.png",
          "/products/product-6.3.png",
        ],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-SHT-NVY-107",
    title: "Men's Solid Navy Blue Button-Down Casual Shirt",
    description:
      "Add a timeless staple to your wardrobe with this Men's Solid Navy Blue Casual Shirt. This versatile shirt features a classic button-down collar, long sleeves, and a single patch pocket on the chest. Crafted from a comfortable and breathable cotton-blend fabric, its regular fit ensures it's perfect for both office casual and weekend wear. Pairs effortlessly with jeans or chinos.",
    images: [
      "/products/product-7.1.png",
      "/products/product-7.2.png",
      "/products/product-7.3.png",
    ],
    oldPrice: "Rs 1200",
    price: "Rs 599",
    quantity: 1,
    color: "Navy Blue",
    size: "S",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "top-rating",
    rating: 4.6,
    reviews: [
      {
        user: "Vishal G.",
        rating: 5,
        comment:
          "Perfect navy shirt. The button-down collar gives it a smart look. Fabric is comfortable and the fit is spot on.",
        images: [
          "/products/product-7.1.png",
          "/products/product-7.2.png",
          "/products/product-7.3.png",
        ],
        videos: [],
      },
      {
        user: "Harish",
        rating: 4.5,
        comment:
          "Great shirt for the price. The color is a deep navy, just what I wanted. It's become my go-to shirt for casual Fridays.",
        images: [
          "/products/product-7.1.png",
          "/products/product-7.2.png",
          "/products/product-7.3.png",
        ],
        videos: [],
      },
      {
        user: "Sumit P.",
        rating: 4,
        comment:
          "Solid shirt, good quality. It does wrinkle a bit after washing, but that's expected with cotton. Otherwise, no complaints.",
        images: [
          "/products/product-7.1.png",
          "/products/product-7.2.png",
          "/products/product-7.3.png",
        ],
        videos: [],
      },
      {
        user: "Jay Patel",
        rating: 5,
        comment:
          "Excellent fit and classic style. The material feels durable. Highly recommend this.",
        images: [
          "/products/product-7.1.png",
          "/products/product-7.2.png",
          "/products/product-7.3.png",
        ],
        videos: [],
      },
    ],
  },
  {
    id: "SKU-SHT-LTYL-108",
    title: "Men's Light Yellow Textured Casual Shirt",
    description:
      "Brighten up your casual collection with this Men's Light Yellow Textured Shirt. Crafted from a high-quality, breathable fabric with a subtle slub texture, this shirt is perfect for warm weather. It features long sleeves, a classic spread collar, and a full button placket. The soft yellow hue and regular fit offer a relaxed yet stylish look that pairs perfectly with jeans or chinos.",
    images: ["/products/product-8.1.png", "/products/product-8.2.png"],
    oldPrice: "Rs 1200",
    price: "Rs 599",
    quantity: 1,
    color: "Light Yellow",
    size: "S",
    inStock: true,
    OnSale: true,
    category: "men",
    productSellingCategory: "on-selling",
    rating: 4.4,
    reviews: [
      {
        user: "Nikhil D.",
        rating: 5,
        comment:
          "The fabric texture is amazing! It's lightweight and very comfortable, perfect for summer. The light yellow color is very pleasant.",
        images: ["/products/product-8.1.png", "/products/product-8.2.png"],
        videos: [],
      },
      {
        user: "Gaurav S.",
        rating: 4,
        comment:
          "Nice shirt, the color and texture are exactly as shown. I just wish I had a front picture before buying, but it's a standard button-down. Happy with it.",
        images: ["/products/product-8.1.png", "/products/product-8.2.png"],
        videos: [],
      },
      {
        user: "Rohit",
        rating: 4.5,
        comment:
          "A very elegant and comfortable shirt. The material feels like a soft cotton or linen blend. Great for casual outings. Fit is true to size.",
        images: ["/products/product-8.1.png", "/products/product-8.2.png"],
        videos: [],
      },
    ],
  },
];
