import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
<<<<<<< Updated upstream

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
=======
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;




>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
<<<<<<< Updated upstream
<Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <App />
=======
    
<Auth0Provider domain={'dev-5bxr7c20b1jrcleb.us.auth0.com'}
           clientId={'GCaIv9fX2eRbnCN121qBUcyrwDYGvfbb'} 
          redirectUri={window.location.origin}
          onError={(error) => console.error("Auth0 Error:", error)}
          >
      <App />

>>>>>>> Stashed changes
    </Auth0Provider>

  </React.StrictMode>,
)