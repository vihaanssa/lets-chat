// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBXIfd6A_Tdl7jiD08mE7cwsCNsuGHP1rg",
    authDomain: "kwitter-cdcc1.firebaseapp.com",
    databaseURL: "https://kwitter-cdcc1-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdcc1",
    storageBucket: "kwitter-cdcc1.appspot.com",
    messagingSenderId: "1062876566467",
    appId: "1:1062876566467:web:48324fbcf85d7c0a9f6376",
    measurementId: "G-P14201J18F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user() {
     user = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user).update({
         purpose:"hey this is vihaan here"
     })
  }