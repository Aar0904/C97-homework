var firebaseConfig = {
      apiKey: "AIzaSyBJ6YKJwYjK5SgWyzOxJMCf1xGoj3oQvNk",
      authDomain: "kwitter-40f3e.firebaseapp.com",
      databaseURL: "https://kwitter-40f3e-default-rtdb.firebaseio.com",
      projectId: "kwitter-40f3e",
      storageBucket: "kwitter-40f3e.appspot.com",
      messagingSenderId: "947408112675",
      appId: "1:947408112675:web:ff5a8a976926f5c114f596"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+ Room_names +"</div></hr";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "dps.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "dps_screen.html";
}

function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
