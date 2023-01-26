import { Box, Button, colors, TextField } from "@mui/material";
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code pour vérifier les informations d'identification ici
        console.log("Email: ", email);
        console.log("Password: ", password);
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
                    style={{backgroundColor: "darkgrey", marginBottom: "20px", marginTop: "100px", width: "400px"}}
                    sx={{ borderRadius: '2px' }}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{backgroundColor: "darkgrey"}}
                    sx={{ gridColumn: "span 4", borderRadius: '2px', marginBottom: "20px", width: "400px" }}
                />
                <Button type="submit" title="Login" aria-label="login" style={{backgroundColor: "darkgrey"}}>Login</Button>
                </div>
            </Box>

        </form>
    )
}

export default Login;