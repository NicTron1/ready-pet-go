import { useAuth0 } from '@auth0/auth0-react';
<<<<<<< Updated upstream

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button onClick ={() => loginWithRedirect()}>
            Sign In
            </button>
=======
import Button from '@mui/material/Button';
import '../SwipeButtons.css'



const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();



    return (
        !isAuthenticated && (
            <Button variant="contained" color="secondary" onClick ={() => loginWithRedirect()}>
            Sign In
            </Button>
>>>>>>> Stashed changes
        )


    )
}

export default LoginButton