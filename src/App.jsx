import Header from './Header'
import PetCards from './PetCards'
import SwipeButtons from './SwipeButtons'
import './App.css'
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import React from 'react';

function App() {
  return (
    <>

      <Header />
      <PetCards />
      <SwipeButtons />
      <h1>Auth0 Login</h1>

      console.log('Auth0 Domain:', domain);
      console.log('Auth0 Client Id:', clientId);
      <LoginButton />
      <LogoutButton /> 


    </>
  )
}

export default App
