// // user represent the user logged in
// let user = false;

// // load users

// let users = [
//   {
//     userName: "Benllshua",
//     password: "12341234",
//     email: "benshua2@gmail.com",
//   },
//   {
//     userName: "Johny",
//     password: "123123",
//     email: "johny@gmail.com",
//   },
// ];

// // load more users from localStorage

// // make sure that browser has local storage
// if (typeof Storage !== "undefined") {
//   //make sure that 'users' exists in localStorage

//   const localStorageUsers = JSON.parse(window.localStorage.getItem("users"));
//   if (!Boolean(localStorageUsers)) {
//     window.localStorage.setItem("users", JSON.stringify([]));
//   }
//   // if 'users' exists in localStorage - add them to 'users' variable
//   else {
//     users = users.concat(localStorageUsers);
//   }
// }

// // load user

// // make sure that browser has local storage
// if (typeof Storage !== "undefined") {
//   //make sure that 'users' exists in localStorage

//   const localStorageUser = JSON.parse(window.localStorage.getItem("user"));
//   if (!Boolean(localStorageUser)) {
//     window.localStorage.setItem("user", JSON.stringify(false));
//     UnLoadUser();
//   }
//   // if 'users' exists in localStorage
//   else {
//     LoadUser(localStorageUser);
//   }
// }

// function LoadUser(user) {
//   const a = document.getElementById("MyAccountLink");
//   a.href = "./my-account.html";

//   const helloUser = document.getElementById("helloUser");

//   helloUser.classList.remove("hide");
// }

// function UnLoadUser() {
//   const a = document.getElementById("MyAccountLink");
//   a.href = "./login.html";
// }
