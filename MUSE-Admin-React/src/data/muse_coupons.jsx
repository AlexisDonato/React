import axios from "axios";

// Bypasses the SSL certificate query
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Coupons() {
  const coupons = (
    await axios.get("/api/coupons", {
      headers: {
        "Accept": "application/json"
      }
    })).data;
    // console.log(coupons);
  return (
    coupons.map((item) => (
      {
        id: item?.id,
        code: item?.code,
        discountRate: item?.discountRate,
        validated: item?.validated,
        cart: item?.cart,
      }
    )
    )
  )
};