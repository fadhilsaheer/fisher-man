import { dbUrl } from "./variables.js"; // importing database url from

const sessionUser = sessionStorage.getItem("user"); // getting user from session

if (sessionUser) window.location.href = "./dashboard.html"; // sending user to dashboard page if he already signed in

let form = document.getElementById("form");
let loader = document.querySelector(".loader-main")


form.addEventListener("submit", async (e) => {

  e.preventDefault(); // prevent submitting form

  loader.style.display = "block"

  // collecting data


  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = new Hashes.MD5().hex(document.getElementById("password").value);


  const user = { name, email, password };

  // check if user exists or not

  let usersData = await fetch(dbUrl + "/users");
  usersData = await usersData.json();

  let canSignup = true;

  // looping through element in array
  

  for (let i = 0; i < usersData.length; i++) {
    let userData = usersData[i]
    if(userData.name == user.name || userData.email == user.email){
        canSignup = false
        break;
    }
  }

  // user signup

  if (canSignup) {

    fetch(dbUrl + "/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(()=>{
        sessionStorage.setItem("user", JSON.stringify(user)); // setting user to session 
        window.location.href = "./dashboard.html"

    })

  }else{

    loader.style.display = "none"
    swal("Oops something went wrong !!", "look like your username or email is taken 😓", "error")

  }
});
