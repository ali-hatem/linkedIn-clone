let users = [];
let signupEmail = document.getElementById("user-email-signup");
let signupPassword = document.getElementById("user-password-signup");
let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("passwordInput");
let stSignupBtn = document.getElementById("st-btn-signup");
let ndSignupBtn = document.getElementById("ndSignupBtn");
let rdSignupBtn = document.getElementById("rd-signup-btn");
let loginBtn = document.getElementById("login-btn");
let fnameSignup = document.getElementById("fname-input");
let lnameSignup = document.getElementById("lname-input");
let countrySelect = document.getElementById("country-select");
let city = document.getElementById("optional-city");


users = getUsersFromLocalStorage();

function getUsersFromLocalStorage() {
  let result = JSON.parse(localStorage.getItem('users'));
  return Array.isArray(result) ? result : [];
}

function setUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

function userAllDataFromAllForms(){
    let form1 = getForm1DataFromSessionStorage();
    let form2 = getForm2DataFromSessionStorage();
    let form3 = getForm3DataFromSessionStorage();
    let userFullData = { ...form1, ...form2, ...form3 };
    setUserFullData(userFullData);
    users.push(userFullData);
    setUsersToLocalStorage();
}

function setUserFullData(user){
    localStorage.setItem("user", JSON.stringify(user));
}

function getUserFullData(){
    let result = JSON.parse(localStorage.getItem('user'));
    return result;
}

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validation(input) {
  input.classList.toggle("is-invalid", input.value == "");
}

function addForm1ToSessionStorage(object){
    sessionStorage.setItem('formOne', JSON.stringify(object));
}

function getForm1DataFromSessionStorage(){
    let result = JSON.parse(sessionStorage.getItem('formOne'));
    return result || {};
}

function addForm2ToSessionStorage(object){
    sessionStorage.setItem('formTwo', JSON.stringify(object));
}

function getForm2DataFromSessionStorage(){
    let result = JSON.parse(sessionStorage.getItem('formTwo'));
    return result || {};
}

function addForm3ToSessionStorage(object){
    sessionStorage.setItem('formThree', JSON.stringify(object));
}

function getForm3DataFromSessionStorage(){
    let result = JSON.parse(sessionStorage.getItem('formThree'));
    return result || {};
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
      validation(loginEmail);
      validation(loginPassword);
      return;
    }

    if (!isValidEmail(loginEmail.value)) {
      loginEmail.classList.add("is-invalid"); 
      alert("Please enter a valid email address");
      return;
    } else {
      loginEmail.classList.remove("is-invalid"); 
    }

    let foundUser = false;
    for(let i = 0; i < users.length; i++){
        if(users[i].email == loginEmail.value && users[i].password == loginPassword.value){
            foundUser = true;
            break;
        }
    }
    
    if(foundUser){
        window.location.href = "feeds.html"
    } else {
        let emailExists = users.some(u => u.email == loginEmail.value);
        if(emailExists) {
            alert("wrong password try again");
        } else {
            alert("email does not exist please signup or use another email");
        }
    }
});

stSignupBtn.addEventListener("click", function () {
  if(signupEmail.value == "" || signupPassword.value == ""){
      validation(signupEmail);
      validation(signupPassword);
      return;
    }

  if (!isValidEmail(signupEmail.value)) {
    signupEmail.classList.add("is-invalid"); 
    alert("Please enter a valid email address");
    return;
  } else {
    signupEmail.classList.remove("is-invalid"); 
  }

  let emailAlreadyExists = users.some(u => u.email == signupEmail.value);
    if(emailAlreadyExists) {
        alert("email already exist please user another email");
        return;
    }
    
    let stUserSignupForm = {
        email: signupEmail.value,
        password: signupPassword.value,
    };
    alert("done");
    addForm1ToSessionStorage(stUserSignupForm);
    document.getElementById("stCard").classList.remove("active");
    document.getElementById("ndCard").classList.add("active");
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
  window.location.href = "feeds.html"
}
})



