import axios from "axios";

// This line sets the environment variable 'NODE_TLS_REJECT_UNAUTHORIZED' to '0' 
// which allows the client to bypass the SSL certificate query.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Addresses() {
  // With function 'fetch'
  // const addresses = (await (await fetch("https://127.0.0.1:8000/api/addresses")).json())["hydra:member"];
  // console.log(addresses);


  // With 'axios' ("proxy" : "http://localhost:8000" is needed to be written in 'package.json)

  // Code to fetch the addresses using 'axios'
  // This line uses axios to make a GET request to the URL '/api/addresses'
  // The 'headers' property is added to specify the content type as 'application/json'
  // The response from the server is stored in the constant 'addresses' as the 'data' property of the response
  const addresses = (
    await axios.get("/api/addresses", {
      headers: {
        "Accept": "application/json"
      }
    })).data;
    // This line allows to log the value of 'addresses' to the console
    // console.log(addresses);

  // This line returns a new array, which is created by mapping through the 'addresses' array
  // For each item in the 'addresses' array, the properties of each object are destructured 
  // and a new object is returned with the specified properties
  return (
    addresses.map((item) => (
      {
        id: item?.id,
        name: item?.name,
        country: item?.country,
        zipcode: item?.zipcode,
        city: item?.city,
        pathType: item?.pathType,
        pathNumber: item?.pathNumber,
        user: item?.user.email,
        billingAddress: item?.billingAddress,
        deliveryAddress: item?.deliveryAddress,
      }
    )
    )
  )
};