import axios from "axios";

// Bypasses the SSL certificate query
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function OrderDetails() {
  const order_details = (
    await axios.get("/api/order_details", {
      headers: {
        "Accept": "application/json"
      }
    })).data;

  return (
    order_details.map((item) => (
      {
        id: item?.id,
        productId: item?.productId,
        quantity: item?.quantity,
        cart: item?.cart.clientOrderId,
        product: item?.product.name,
        subTotal: item?.subTotal,
      }
    )
    )
  )
};