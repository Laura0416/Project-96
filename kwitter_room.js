var firebaseConfig = {
    apiKey: "AIzaSyARPe79Tl9XY7vDaF8192f6WNZMLQfGAHA",
    authDomain: "kwitter-project-eeed6.firebaseapp.com",
    databaseURL: "https://kwitter-project-eeed6-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-eeed6",
    storageBucket: "kwitter-project-eeed6.appspot.com",
    messagingSenderId: "1054539070044",
    appId: "1:1054539070044:web:8e5335d2e5946db54a8499"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
console.log(user_name);
document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!";
  
function addRoom(){
room_name = document.getElementById("room_name").value;
  
firebase.database().ref("/").child(room_name).update({purpose: "Creating a Room"});
  
localStorage.setItem("room_name", room_name);
  
window.location = "room_page.html";
}
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Names - " + Room_names);
    row = "<div class='room_name' id = " + Room_names + " onclick = 'redirectToRoom(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
  
function redirectToRoom(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "room_page.html";
}
  
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}