//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDsYF42VdmUL43xgxGcLZ7oQoEM0yM2J-I",
  authDomain: "element-751cd.firebaseapp.com",
  databaseURL: "https://element-751cd.firebaseio.com",
  projectId: "element-751cd",
  storageBucket: "element-751cd.appspot.com",
  messagingSenderId: "83775119708",
  appId: "1:83775119708:web:ba86d24f2ed4dab2242199"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



// Adv95
function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    RoomName: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";

}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}



// Next Class
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}