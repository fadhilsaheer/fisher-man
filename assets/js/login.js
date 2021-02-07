import { dbUrl } from './variables.js';

const user = JSON.parse(sessionStorage.getItem("user")); // getting user from session

if(user) window.location.href="./dashboard.html"; // sending user to dashboard page if he already signed in

let loader = document.querySelector(".loader-main");
let form = document.getElementById("form");



form.addEventListener("submit", async (formEvent) => {
  formEvent.preventDefault();


  loader.style.display = "block";

  // collecting data

  let email = document.getElementById("email").value;
  let password = new Hashes.MD5().hex(
    document.getElementById("password").value
  );

  let userData = await fetch(`${dbUrl}/users?email=${email}&password=${password}`);
  userData = await userData.json();

  let canLogin = userData.length == 0 ? false : true;

  if(canLogin){
    const user = userData[0]
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href="./dashboard.html";
  }else{
      loader.style.display = "none";
      swal("I hate invalid login !", "your login info is not correct 🥱", "error")
  }


});


