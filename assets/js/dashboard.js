import { dbUrl } from "./variables.js";

const user = JSON.parse(sessionStorage.getItem("user"));

if (!user) window.location.href = "./login.html";

// logout

let logoutLink = document.getElementById("logout-link");

logoutLink.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  window.location.href = "./login.html";
});

// copy link to clip board

let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", (e) => {
  let link = e.target.getAttribute("data-link");

//   link.select();
//   link.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy", false, );
});

// dom

document.getElementById("user-name").innerText = user.name;

let passwordDb = document.getElementById("password-db");
