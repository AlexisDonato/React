import axios from "axios";

// Bypasses the SSL certificate query
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Suppliers() {
  const suppliers = (
    await axios.get("/api/suppliers", {
      headers: {
        "Accept": "application/json"
      }
    })).data;

  return (
    suppliers.map((item) => (
      {
        id: item?.id,
        name: item?.name,
      }
    )
    )
  )
};