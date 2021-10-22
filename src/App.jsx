import React from "react";
import Routes from "routes/Main";
import "styles/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
  return (
    <Auth0Provider
      domain="proyecto-ventas.us.auth0.com"
      clientId="ZbygeOmsoI68EwmJ79f8DA7A1tP4cl1V"
      redirectUri='https://cryptic-citadel-08995.herokuapp.com/menu'
      //audience='api-autenticacion-gestor-ventas'
      audience='https://proyecto-ventas.us.auth0.com/api/v2/'
    >
      <div className="App">
        <Routes />
      </div>
    </Auth0Provider>
      
  );
}
export default App;
