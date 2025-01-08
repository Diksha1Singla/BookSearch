import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './GoogleLoginButton';
import ErrorBoundary from './ErrorBoundary';



const clientId = '811241856297-78mh835upvmnjt6rgbm9hk4ehh1s23b3.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <h1>Login with Google</h1>
        <ErrorBoundary>
          <GoogleLoginButton />
        </ErrorBoundary>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
