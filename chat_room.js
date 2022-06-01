const firebaseConfig = {
    apiKey: "AIzaSyC0s5D8I0uXHBFEQsJsKutGEEnBYUPnNrA",
    authDomain: "chat-d3531.firebaseapp.com",
    projectId: "chat-d3531",
    storageBucket: "chat-d3531.appspot.com",
    messagingSenderId: "109918172845",
    appId: "1:109918172845:web:c0361b0078882bf715f824",
    measurementId: "G-0QJX4C2NS3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +" ! ";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();