let user = [];
let users = [];
let signupEmail = document.getElementById("user-email-signup");
let signupPassword = document.getElementById("user-password-signup");
let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("passwordInput");
let stSignupBtn = document.getElementById("st-btn-signup");
let ndSignupBtn = document.getElementById("ndSignupBtn");
let rdSignupBtn = document.getElementById("rd-signup-btn");
let loginBtn = document.getElementById("login-btn");
let fnameSignup = document.getElementById("fname-input")
let lnameSignup = document.getElementById("lname-input")
let countrySelect = document.getElementById("country-select")
let city = document.getElementById("optional-city")

users = getUsersFromLocalStorage();
function setUsersToLocalStorage(user) {
  localStorage.setItem(`users`, JSON.stringify(user));
}

function getUsersFromLocalStorage() {
  let result = JSON.parse(localStorage.getItem(`users`));
  return result
}

function userAllDataFromAllForms(){
    let form1 =getForm1DataFromSessionStorage()
    let form2 =getForm2DataFromSessionStorage()
    let form3 =getForm3DataFromSessionStorage()
    user.push(form1)
    user.push(form2)
    user.push(form3)  
    let userFullData = Object.assign({}, ...user);
     setUserFullData(userFullData)
     setUsersToLocalStorage(userFullData)  
    
}

function setUserFullData(user){
    localStorage.setItem("user", JSON.stringify(user))
}

function getUserFullData(){
    let result = JSON.parse(localStorage.getItem(user))
    return result;
}

function validation(input) {
  input.classList.toggle("is-invalid", input.value == "");
}

function addForm1ToSessionStorage(object){
    let user1 = object
    sessionStorage.setItem(`formOne`, JSON.stringify(user1))
}

function getForm1DataFromSessionStorage(){
    let result = JSON.parse(sessionStorage.getItem(`formOne`))
    return result
}

function addForm2ToSessionStorage(object){
    let user2 = object
    sessionStorage.setItem(`formTwo`, JSON.stringify(user2))
}

function getForm2DataFromSessionStorage(){
    let result = JSON.parse(sessionStorage.getItem(`formTwo`))
    return result
}

function addForm3ToSessionStorage(object){
    let user3 = object
    sessionStorage.setItem(`formThree`, JSON.stringify(user3))
}

function getForm3DataFromSessionStorage(){
    let result = JSON.parse(sessionStorage.getItem(`formThree`))
    return result
}

function switchToSignin() {
  document.getElementById("signup-card").classList.add("hidden");
  document.getElementById("login-card").classList.remove("hidden");
}

function switchToSignup() {
  document.getElementById("signup-card").classList.remove("hidden");
  document.getElementById("login-card").classList.add("hidden");
}

function loginShowPassword() {
  if (loginPassword.type == "password") loginPassword.type = "text";
  else loginPassword.type = "password";
}

function showPassword() {
  if (signupPassword.type == "password") signupPassword.type = "text";
  else signupPassword.type = "password";
}

loginBtn.addEventListener("click", function(){
    if(loginEmail.value == "" || loginPassword.value == ""){
      validation(loginEmail)
      validation(loginPassword)
    }
    else
        window.location.href = "feeds.html"
})

stSignupBtn.addEventListener("click", function () {
  if(signupEmail.value == "" || signupPassword.value == ""){
      validation(signupEmail)
      validation(signupPassword)
    }
    let checked = false
    for(let i = 0; i < users.length; i++){
        if(users[i].email != signupEmail.value){
            checked = true;
            break;
        }
    }
        if(checked == true)
        {
            let stUserSignupForm = {
                email: signupEmail.value,
                password: signupPassword.value,
            };
            addForm1ToSessionStorage(stUserSignupForm);
            document.getElementById("stCard").classList.remove("active");
            document.getElementById("ndCard").classList.add("active");
        }
});
ndSignupBtn.addEventListener("click", function () {
  if(fnameSignup.value == "" || lnameSignup.value == ""){
      validation(fnameSignup)
      validation(lnameSignup)
    }
    else{
  let ndUserSignupForm = {
    firstName: fnameSignup.value,
    lastName: lnameSignup.value,
  };
  addForm2ToSessionStorage(ndUserSignupForm);
  document.getElementById("ndCard").classList.remove("active");
  document.getElementById("rdcard").classList.add("active");
  }
});

rdSignupBtn.addEventListener("click", function(){
    if(countrySelect.value == ""){
      validation(countrySelect)
    }else{
  let rdUserSignupForm = {
    country: countrySelect.value,
    city: city.value,
  }
  addForm3ToSessionStorage(rdUserSignupForm);
  userAllDataFromAllForms()
//   window.location.href = "feeds.html"
}
})



