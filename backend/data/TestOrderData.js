import axios from "axios";

// Example order data (customize as needed)
const testOrder = {
  orderItems: [
    {
      name: "3 Piece Luxury Lawn Unstitched Suit",
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800",
      price: 8500,
      product: "662b7f2e8b1e8a1a2c3d4e5f", // <-- real product _id
    },
  ],
  shippingAddress: {
    address: "123 Main St",
    city: "Lahore",
    postalCode: "54000",
    country: "Pakistan",
  },
  paymentMethod: "Cash on Delivery",
  totalPrice: 17200,
};

const USER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMDRiOTM3NWU2OWYyOGQ3OGM4OTVlNSIsImlhdCI6MTc3ODY5NDQ1NiwiZXhwIjoxNzgxMjg2NDU2fQ.1jSbTxG7z0JYpUt4xERy3qyKyDEqjXQPuR0Q-ZvmLwI"; // Replace with a real JWT token

async function placeTestOrder() {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/orders",
      testOrder,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      }
    );
    console.log("Order placed successfully:", res.data);
  } catch (err) {
    console.error("Order placement failed:", err.response?.data || err.message);
  }
}

placeTestOrder();
