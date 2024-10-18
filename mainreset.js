// Firebase configuration
const firebaseConfig = 
{
    apiKey: "AIzaSyDwR2A1mkIWQZdllHOmZHyVYhSc23jlNNg",
    authDomain: "otpgen4.firebaseapp.com",
    projectId: "otpgen4",
    storageBucket: "otpgen4.appspot.com",
    messagingSenderId: "997115198555",
    appId: "1:997115198555:web:6e36f82eb9e79459c9d37e"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

// Forgot password form
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

// Handle form submission
const start = () => {
    // Get the forgotPasswordForm element
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    // Add submit event listener to the form
    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user's email
        const email = forgotPasswordForm['email'].value;

        // Send password reset email
        auth.sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent successfully
                alert('A password reset link has been sent to your email.');
                forgotPasswordForm.reset();
            })
            .catch((error) => {
                // An error occurred
                console.error('Error sending password reset email:', error.message);
                alert('An error occurred while sending the password reset email. Please try again later.');
            });
    });
}
