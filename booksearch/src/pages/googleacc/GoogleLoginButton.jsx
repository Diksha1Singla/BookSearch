import React, { useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = () => {
  useEffect(() => {
    // 811241856297-78mh835upvmnjt6rgbm9hk4ehh1s23b3.apps.googleusercontent.com
    /* Initialize Google Login */
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '811241856297-78mh835upvmnjt6rgbm9hk4ehh1s23b3.apps.googleusercontent.com', // Replace with your actual Google Client ID
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInDiv'), // The element to render the button into
        { theme: 'outline', size: 'large' } // Customization options
      );
    }
  }, []);

  /* Callback function for handling login success */
  const handleCallbackResponse = (response) => {
    if (response && response.credential) {
      const decoded = jwtDecode(response.credential);
      console.log("User info:", decoded);
      // Here you can manage the user's data (e.g., send it to your backend or store it in your app state)
    } else {
      console.error("Invalid credential response.");
    }
  };

  return (
    <div>
      <div id="googleSignInDiv"></div> {/* Google login button will render here */}
    </div>
  );
};

export default GoogleLoginButton;