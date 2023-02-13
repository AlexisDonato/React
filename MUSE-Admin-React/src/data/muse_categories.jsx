import axios from "axios";

// Bypasses the SSL certificate query
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Categories() {
  const categories = (
    await axios.get("/api/categories", {
      headers: {
        "Accept": "application/json"
      }
    })).data;
    // console.log(categories);
  return (
    categories.map((item) => (
      {
        id: item?.id,
        name: item?.name,
        parentCategory: item?.parentCategory,
        image: item?.image,
      }
    )
    )
  )
};