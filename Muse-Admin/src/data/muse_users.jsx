import axios from "axios";
import { date } from "yup/lib/locale";

export default async function Users() {
  const users = (await (await fetch("https://127.0.0.1:8000/api/users")).json())["hydra:member"];

  return (
    users.map((item, i) => (
      {
        id: item?.id,
        name: item?.userName,
        lastName: item?.userLastName,
        email: item?.email,
        roles: item?.roles,
        birthdate: item?.birthdate,
        phoneNumber: item?.phoneNumber,
        carts: item?.carts,
        registerDate: item?.registerDate,
        vat: item?.vat,
        pro: item?.pro,
        address: item?.address,
        agreeTerms: item?.agreeTerms,
      }
    )
    )
  )
};
    // <div key={i}>
    // <p>{item?.userName}</p></div>