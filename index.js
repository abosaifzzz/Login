export function createUsersStorage() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
}
createUsersStorage();

function addUserToStorage(user) {
  let users = JSON.parse(localStorage.getItem("users"));
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}
//signup validation

const fName = document.getElementById("f-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm-password");
const nameRegex = /^[A-Za-z]{3,}$/;
const emailRegex = /^[^\s@]{3,}@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log("helloooooo");
let valid = {
  fName: false,
  email: false,
  password: false,
};

// First Name
fName.addEventListener("input", function () {
  if (nameRegex.test(fName.value)) {
    valid.fName = true;
    console.log("true");
    fName.classList.add("is-valid");
    fName.classList.remove("is-invalid");
  } else {
    valid.fName = false;
    console.log("fales");
    fName.classList.remove("is-valid");
    fName.classList.add("is-invalid");
  }
});

// Email
email.addEventListener("input", function () {
  if (emailRegex.test(email.value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    valid.email = true;
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    valid.email = false;
  }
});

// Password
password.addEventListener("input", function () {
  console.log(password.value);
  if (passwordRegex.test(password.value)) {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    valid.password = true;
  } else {
    valid.password = false;
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
  }
});

//submit

document.getElementById("signupForm").addEventListener("click", function (e) {
  e.preventDefault;
  if (valid.fName && valid.email && valid.password === true) {
    let user = {
      firstName: fName.value,
      email: email.value,
      password: password.value,
    };
    createUsersStorage();
    addUserToStorage(user);
    console.log("login");
    window.location.href = "login.html";
  }
});

// // // submit
// document.getElementById("signupForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (valid.fName && valid.email && valid.password === true) {
//     let user = {
//       firstName: fName.value,
//       email: email.value,
//       password: password.value,
//     };
//     createUsersStorage();
//     addUserToStorage(user);
//     window.location.href = "../products";
//   } else {
//     console.log("no");
//   }
// });

// function changeMessage(id, valid, message) {
//   if (valid) {
//     document.getElementById(id).textContent = "✔";
//     document.getElementById(id).className = "success";
//   } else if (!valid) {
//     document.getElementById(id).textContent = message;
//     document.getElementById(id).className = "error";
//   }
// }
