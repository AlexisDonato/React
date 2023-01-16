import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /* axios.get("http://127.0.0.1:8000/api/users", {
      mode: "no-cors"
    }).then((data) => {
      console.log(data);
      setUsers(data?.data["hydra:member"]);

    }); */
    fetch("http://127.0.0.1:8000/api/users",{
      mode: "no-cors"
    }).then((data) => {
      data.json()
        .then(json => {
          console.log(json);
          setUsers(json["hydra:member"]);
        })
    });
  }, []);


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
      // <div key={i}> 
      // <p>{item?.userName}</p></div>
    )
    )
  )
};