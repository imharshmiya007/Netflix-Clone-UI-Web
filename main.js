      // setting up firebase with our website

const firebaseApp = firebase.initializeApp({
     /* Firebase config */
     apiKey: "AIzaSyDwR2A1mkIWQZdllHOmZHyVYhSc23jlNNg",
  authDomain: "otpgen4.firebaseapp.com",
  projectId: "otpgen4",
  storageBucket: "otpgen4.appspot.com",
  messagingSenderId: "997115198555",
  appId: "1:997115198555:web:6e36f82eb9e79459c9d37e" 
    });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//sign up function 

   const signup = () =>
   {

    const email = document.getElementById(":R19mah123:").value;
    const password = document.getElementById(":R1amah123:").value;
    console.log(email, password);
            // firebase code 
            firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
                window.location.href = 'getstart3.html'; 
                // document.write("You are signed up!");
                console.log(result);
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
   }

// sign up function

   const signin = () =>
   {
        const email = document.getElementById(":email123:").value;
        const password = document.getElementById(":password123:").value;

            // firebase code

            firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
             // Signed in 
             document.write("You are signed in!");
             console.log(result);
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
   }