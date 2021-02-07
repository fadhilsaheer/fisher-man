import { dbUrl } from "./variables.js"; // importing database url from

const sessionUser = sessionStorage.getItem("user"); // getting user from session

if (sessionUser) window.location.href = "./dashboard.html"; // sending user to dashboard page if he already signed in

let loader = document.querySelector(".loader-main");
let form = document.getElementById("form");



form.addEventListener("submit", async (formEvent) => {
  formEvent.preventDefault();


  loader.style.display = "block";

  // collecting data

  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = new Hashes.MD5().hex(
    document.getElementById("password").value
  );

  const user = { name, email, password };

  // check if user exists or not

  let userDataNameExist = await fetch(`${dbUrl}/users?name=${name}`)
  let userDataEmailExist = await fetch(`${dbUrl}/users?email=${email}`)
  userDataNameExist = await userDataNameExist.json()
  userDataEmailExist = await userDataEmailExist.json()

  userDataNameExist = userDataNameExist.length == 0 ? false : true;
  userDataEmailExist = userDataEmailExist.length == 0 ? false : true

  let canSignup = false

  if(userDataNameExist == false && userDataEmailExist == false) canSignup = true

  //   user signup

  if (canSignup) {
    fetch(dbUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      sessionStorage.setItem("user", JSON.stringify(user)); // setting user to session
      window.location.href = "./dashboard.html";
    });
  } else {
    loader.style.display = "none";
    swal(
      "Oops something went wrong !!",
      "look like your username or email is taken 😓",
      "error"
    );
  }
});

