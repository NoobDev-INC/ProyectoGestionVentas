import React from "react";
import Routes from "routes/Main";
import "styles/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateLayout from "layouts/PrivateLayout";


function App() {
  return (
    <Auth0Provider
      domain="proyecto-ventas.us.auth0.com"
      clientId="ZbygeOmsoI68EwmJ79f8DA7A1tP4cl1V"
      redirectUri={window.location.origin + '/menu'} 
      audience='https://proyecto-ventas.us.auth0.com/api/v2/'
    >
      <div className="App">
        <PrivateLayout/>
        <Routes />
      </div>
    </Auth0Provider>
      
  );
}
export default App;
