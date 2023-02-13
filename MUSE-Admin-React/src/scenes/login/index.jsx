import { Box, Button, TextField } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'

const Login = () => {
    // State to store the value of the email field
    const [email, setEmail] = useState("");
    // State to store the value of the password field
    const [password, setPassword] = useState("");

    // Function for navigating to a different page
    const navigate = useNavigate();

    // Function to handle changes in the email field
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // Function to handle changes in the password field
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Object to store the values of email and password
    const values =
    {
        "username": email,
        "password": password
    }


    const handleSubmit = (event) => {
        // Prevent the default behavior of the submit event
        event.preventDefault();
        // Send a POST request to the specified URL with the values object as its body
        axios.post("/api/login_check", values,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }

            })
            .then(response => {
                console.log(response);
                // Store the token returned from the server in a cookie
                Cookies.set('token', response.data.token)
                // Check if the cookie has been set successfully
                if (Cookies.get("token"))
                    // Add the token to the header of every axios request
                    axios.interceptors.request.use(
                        config => {
                            config.headers['Authorization'] = `Bearer ${Cookies.get("token")}`;
                            return config;
                        },
                        error => {
                            return Promise.reject(error);
                        }
                    );
                // Navigate to the "/dashboard" page
                navigate("/dashboard")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ backgroundColor: "darkgrey", marginBottom: "20px", marginTop: "100px", width: "400px" }}
                        sx={{ borderRadius: '2px' }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ backgroundColor: "darkgrey" }}
                        sx={{ gridColumn: "span 4", borderRadius: '2px', marginBottom: "20px", width: "400px" }}
                    />
                    <Button type="submit" title="Login" aria-label="login" style={{ backgroundColor: "darkgrey" }}>Login</Button>
                </div>
            </Box>

        </form>
    )
}

export default Login;