import axios from "axios";

// Bypasses the SSL certificate query
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Users() {
  const users = (
    await axios.get("/api/users", {
      headers: {
        "Accept": "application/json"
      }
    })).data;
    // console.log(users);
  return (
    users.map((item) => (
      {
        id: item?.id,
        name: item?.userName,
        lastName: item?.userLastname,
        email: item?.email,
        roles: item?.roles,
        birthdate: item?.birthdate,
        phoneNumber: item?.phoneNumber,
        carts: item?.carts,
        registerDate: item?.registerDate,
        vat: item?.vat,
        pro: item?.pro,
        proCompanyName: item?.proCompanyName,
        proJobPosition: item?.proJobPosition,
        proDuns: item?.proDuns,
        address: item?.address,
        agreeTerms: item?.agreeTerms,
        verified: item?.verified,
      }
    )
    )
  )
};