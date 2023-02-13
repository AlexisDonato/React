import axios from "axios";

// Bypasses the SSL certificate query
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Products() {
  const products = (
    await axios.get("/api/products", {
      headers: {
        "Accept": "application/json"
      }
    })).data;

  return (
    products.map((item) => (
      {
        id: item?.id,
        name: item?.name,
        price: item?.price,
        description: item?.description,
        content: item?.content,
        discount: item?.discount,
        discountRate: item?.discountRate,
        quantity: item?.quantity,
        image: item?.image,
        image1: item?.image1,
        image2: item?.image2,
        supplier: item?.supplier,
        category: item?.category,
      }
    )
    )
  )
};