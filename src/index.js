import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
  domain="dev-kesrqqcm5bnvenh3.us.auth0.com"
  clientId="QFpE6jznrTRyKPe8wMnHhQRkGc2Daf1O"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
);

