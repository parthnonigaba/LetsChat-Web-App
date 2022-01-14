
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBH-oITHZ8MoNRqRo2EHg-0j5C7r0G8ypI",
      authDomain: "kwitter-380db.firebaseapp.com",
      projectId: "kwitter-380db",
      storageBucket: "kwitter-380db.appspot.com",
      messagingSenderId: "308970590677",
      appId: "1:308970590677:web:68527cb038d928110a2d5c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
