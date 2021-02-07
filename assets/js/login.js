import { dbUrl } from './variables.js';

const user = JSON.parse(sessionStorage.getItem("user")); // getting user from session

if(user) window.location.href="./dashboard.html"; // sending user to dashboard page if he already signed in



