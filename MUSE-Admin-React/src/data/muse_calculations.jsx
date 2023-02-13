import axios from "axios";

// Bypasses the SSL certificate query to accept untrusted SSL certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const Calculations = () => {
    return new Promise((resolve, reject) => {
        // Object to store calculated values
        let data = {
            sumTotal: 0, // Total sum of all validated cart orders
            sumVal: 0, // Total number of validated carts
            pro: 0, // Total number of pro users
            sumPro: 0, // Total sum of validated cart orders by pro users
            sumClient: 0, // Total sum of validated cart orders by non-pro users
            todaySales: 0, // Total sales for today
            toDate: new Date(), // Today's date
            sumQuant: 0, // Total quantity of all products
            sumProd: 0, // Total quantity of ordered products
            sumShip: 0, // Total number of shipped carts
            users: 0 // Total number of users
        }

        // Array of promises to store the results of multiple API calls
        let promises = [];

        // First API call to retrieve all carts
        promises.push(axios.get("/api/carts", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            const carts = response.data;
            // console.log(carts);
            let tempTodaySales = 0;
            carts.forEach((cart) => {
                // Check if cart is validated
                if (cart.validated === true) {
                    // Increment the total number of validated carts
                    data.sumVal += 1;
                    // Increment the total number of shipped carts
                    data.sumShip += 1;
                    // Increment the total sum of all validated carts
                    data.sumTotal += Number(cart.total);
                    // Check if the order date of the cart is today
                    if (
                        new Date(cart.orderDate).toLocaleDateString() ===
                        data.toDate.toLocaleDateString()
                    ) {
                        // Increment the sales for today
                        tempTodaySales += cart.total;
                    }
                }
                // Add the tempTodaySales to today's total sales
                data.todaySales += tempTodaySales;
                // Check if the user of the cart is a pro user
                if (cart.user.pro === true) {
                    // Increment the total number of pro users
                    data.pro += 1;
                    // Check if the cart is validated
                    if (cart.validated === true) {
                        // Increment the total sum of validated cart orders by pro users
                        data.sumPro += Number(cart.total);
                    }
                } else {
                    // Check if the cart is validated
                    if (cart.validated === true) {
                        // Increment the total sum of validated cart orders by non-pro users
                        data.sumClient += Number(cart.total);
                    }
                }
            });
        })
        );

        // Second API call to retrieve all products
        promises.push(axios.get("/api/products", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            const products = response.data;
            // Iterate through all products to get the sum of quantities
            products.forEach(product => {
                data.sumQuant += product.quantity ? product.quantity : 0
            });
        }));

        // Third API call to retrieve all order details
        promises.push(axios.get("/api/order_details", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            const orderDetails = response.data;
            // Iterate through all order details to get the sum of all quantities
            orderDetails.forEach((detail) => {
                data.sumProd += detail.quantity;
            });
        }));

        // Fourth API call to retrieve all users
        promises.push(axios.get("/api/users", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            const users = response.data;
            // Store the number of users in the data object
            data.users = users.length;
        }));

        // Wait for all promises to resolve and then resolve the main promise with the data object
        Promise.all(promises).then(() => {
            resolve(data)
        })
    })

};
export default Calculations;