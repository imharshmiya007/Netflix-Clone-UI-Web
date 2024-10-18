
const firebaseConfig = {
    apiKey: "AIzaSyDwR2A1mkIWQZdllHOmZHyVYhSc23jlNNg",
  authDomain: "otpgen4.firebaseapp.com",
  projectId: "otpgen4",
  storageBucket: "otpgen4.appspot.com",
  messagingSenderId: "997115198555",
  appId: "1:997115198555:web:6e36f82eb9e79459c9d37e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function sendOTP() {

    const phoneNumber = document.getElementById('phoneNumber').value;

    // Set up reCAPTCHA verifier
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    // Send OTP
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            // window.location.href = 'ex5.html';
            document.getElementById('status').innerText = 'OTP sent successfully';
        })
        .catch((error) => {
            console.error('Error sending OTP:', error);
            document.getElementById('status').innerText = 'Error sending OTP';
        });
}

function verifyOTP() {
    const otp = document.getElementById('verificationCode').value;

    // Verify OTP
    confirmationResult.confirm(otp)
        .then((result) => {
            alert("OTP verified successfully");
            window.location.href = 'getstart5.html'; 
        })
        .catch((error) => {
            console.error('Error verifying OTP:', error);
            alert("Error verifying OTP");
        });
}
