import axios from "axios";

export default async function Addresses() {
  // With function 'fetch'
  // const addresses = (await (await fetch("https://127.0.0.1:8000/api/addresses")).json())["hydra:member"];
  // console.log(addresses);

  // With 'axios' ("proxy" : "http://localhost:8000" is needed to be written in 'package.json)
  const addresses = (
    await axios.get("/api/addresses", {
      headers: {
        "Accept": "application/json"
      }
    })).data;

  return (
    addresses.map((item) => (
      {
        id: item?.id,
        name: item?.name,
        country: item?.country,
        zipcode: item?.zipcode,
        city: item?.city,
        pathType: item?.pathType,
        phoneNumber: item?.phoneNumber,
        user: item?.user,
        registerDate: item?.registerDate,
        billingAddress: item?.billingAddress,
        deliveryAddress: item?.deliveryAddress,
      }
    )
    )
  )
};