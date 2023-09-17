<<<<<<< Updated upstream
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button onClick ={() => logout()}>
            Sign Out
            </button>
=======
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import '../SwipeButtons.css'



const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    const redirectUri = import.meta.env.DEV
        ? 'http://localhost:5173' // Replace with your development URL
        : 'http://localhost:5173'; // Replace with your production URL


    
    return (
        isAuthenticated && (
            <Button variant="contained" color="primary" onClick ={() => logout()}>
            Sign Out
            </Button>
>>>>>>> Stashed changes
        )


    )
}

<<<<<<< Updated upstream
export default LogoutButton
=======
export default LogoutButton


>>>>>>> Stashed changes
