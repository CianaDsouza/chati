// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC0s5D8I0uXHBFEQsJsKutGEEnBYUPnNrA",
    authDomain: "chat-d3531.firebaseapp.com",
    projectId: "chat-d3531",
    storageBucket: "chat-d3531.appspot.com",
    messagingSenderId: "109918172845",
    appId: "1:109918172845:web:c0361b0078882bf715f824",
    measurementId: "G-0QJX4C2NS3"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorange.setItem("user_name" user_name);

window.location ="chat_room.html";
    
}



