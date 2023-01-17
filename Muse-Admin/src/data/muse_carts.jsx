import axios from "axios";

export default async function Carts() {
  // With function 'fetch'
  // const carts = (await (await fetch("https://127.0.0.1:8000/api/carts")).json())["hydra:member"];
  // console.log(carts);

  // With 'axios' ("proxy" : "http://localhost:8000" is needed to be written in 'package.json)
  const carts = (
    await axios.get("/api/carts", {
      headers: {
        "Accept": "application/json"
      }
    })).data;

  return (
    carts.map((item) => (
      {
        id: item?.id,
        clientOrderId: item?.clientOrderId,
        validated: item?.validated,
        orderDetails: item?.orderDetails,
        user: item?.user,
        orderDate: item?.orderDate,
        total: item?.total,
        shipped: item?.shipped,
        shipmentDate: item?.shipmentDate,
        billingAddress: item?.billingAddress,
        deliveryAddress: item?.deliveryAddress,
        additionalDiscountRate: item?.additionalDiscountRate,
        invoice: item?.invoice,
        coupon: item?.coupon,
        carrier: item?.carrier,
        carrierShipmentId: item?.carrierShipmentId,
      }
    )
    )
  )
};