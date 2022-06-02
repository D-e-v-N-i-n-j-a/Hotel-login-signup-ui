const form = document.getElementById("form");
const pass = document.querySelector(".option");
const signUpBtn = document.getElementById("sign_up_btn");
signUpBtn.addEventListener("click", () => {
  signUpBtn.innerText = "Login";
  pass.classList.toggle("login_back");
});


