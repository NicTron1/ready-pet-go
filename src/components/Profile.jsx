import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import '../SwipeButtons.css'



const Profile = () => {
    const { user, isAuthenticated } = useAuth0();



    return (
        isAuthenticated && (
            <article className= 'component'> 
                {user?.picture && <img src={user.picture} alt={user?.name}/>} 
                <h5>{user?.name}</h5>

            </article>
        )


    )
}

export default Profile