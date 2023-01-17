
// import axios from "axios";
// import { date } from "yup/lib/locale";

export default async function Users() {
  const users = (await (await fetch("https://127.0.0.1:8000/api/users")).json())["hydra:member"];
  console.log(users);
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
    // <div key={i}>
    // <p>{item?.userName}</p></div>