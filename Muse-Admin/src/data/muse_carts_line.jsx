// import { tokens } from "../theme";
// import Moment from 'moment';
// import axios from "axios";

// export async function getCarts() {
//     let fr = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });
  
//     let carts = (
//       await axios.get("/api/carts", {
//         headers: {
//           "Accept": "application/json"
//         }
//       })).data;
    
//     return carts.map((cart) => {
//       if (!cart.validated) return;
//       if (cart.user.pro === true)
//       return (
//       [
//           {
//             id: cart.user.email,
//             color: tokens("dark").greenAccent[500],
//             data: [
//               {
//                 x: Moment(cart.orderDate).format('DD-MM-YYYY'),
//                 y: fr.format(cart.total),
//               },
//             ],
//           },
//       ]);
//       if (cart.user.pro === false)
//       return (
//       [
//           {
//             id: cart.user.email,
//             color: tokens("dark").blueAccent[300],
//             data: [
//               {
//                   x: Moment(cart.orderDate).format('DD-MM-YYYY'),
//                   y: fr.format(cart.total),
//               },
//             ],
//           },
//       ]);
//       });
//   }
 
import { tokens } from "../theme";
import Moment from 'moment';
import axios from "axios";

export async function getCarts() {
    let fr = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });
  
    let carts = (
      await axios.get("/api/carts", {
        headers: {
          "Accept": "application/json"
        }
      })).data;
    
    return carts.map((cart) => {
        if (!cart.validated) return;
        let data = {
            id: cart.user.email,
            data: [
              {
                x: Moment(cart.orderDate).format('DD-MM-YYYY'),
                y: fr.format(cart.total),
              },
            ],
        };
        if (cart.user.pro === true) {
            data.color = tokens("dark").greenAccent[500];
        } else {
            data.color = tokens("dark").blueAccent[300];
        }
        return data;
    });
}
