
const firebaseConfig = {
    apiKey: "AIzaSyDGKTdTKQ51mRzSXg3_XX7TQXPdPgBtBrQ",
    authDomain: "classtest-e9b0b.firebaseapp.com",
    projectId: "classtest-e9b0b",
    storageBucket: "classtest-e9b0b.appspot.com",
    messagingSenderId: "1020754452254",
    appId: "1:1020754452254:web:c021794a7403c4568b730f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



