const users = JSON.parse(localStorage.getItem("users", JSON.stringify()));
document.getElementById("emailError").classList.add("d-none");

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  let userInfo = users.find((userInfo) => userInfo.email == email);
  if (userInfo) {
    if (userInfo.password === password) {
      console.log("user done");
      window.location.href = "welcome.html";
    } else {
      document.getElementById("passwordError").textContent = "Wrong Password";
      console.log("password 8lttttt");
      document.getElementById("emailError").classList.add("d-none");
    }
  } else {
    document.getElementById("emailError").classList.remove("d-none");

    console.log("Email not exist");
  }
});
