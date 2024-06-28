function welcome() {
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);

  let username = users.find(firstName);
  console.log(username);
  document.getElementById("welcome").innerHTML = `Welcome , ${users.value[0]}`;
}
welcome();

function signOut() {
  window.location.href = "login.html";
}

document.getElementById("signOut").addEventListener("click", function () {
  signOut();
});
