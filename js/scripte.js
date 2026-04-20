// let users = [{
//         id: 1,
//         email: "ahmed@gmail.com",
//         password: "123456",
//         firstName: "Ahmed",
//         lastName: "Ali",
//         country: "Egypt",
//         city: "Cairo",
//         skills: ["HTML", "CSS"],
//         posts: [1, 3, 6 ],
//         connections: [{userId:2, status: "pending"},
//           {userId:3, status: "pending"}
//         ]
//       },
//       {
//         id: 2,
//         email: "sara@gmail.com",
//         password: "123456",
//         firstName: "Sara",
//         lastName: "Mohamed",
//         country: "Egypt",
//         city: "Alexandria",
//         skills: ["JavaScript"],
//         posts: [2, 5],
//         connections: [{userId:1, status: "pending"}]
//       },
//       {
//         id: 3,
//         email: "mark@gmail.com",
//         password: "123456",
//         firstName: "mark",
//         lastName: "martin",
//         country: "USA",
//         city: "New York",
//         skills: ["React"],
//         posts: [4],
//         connections: [{userId:1, status: "pending"}]
//       }];
// let posts = [
//   {
//     id: 1,
//     userId: 1,
//     content: "Today I realized that consistency beats motivation. Even on days when you don't feel like working, showing up and doing a small task can build momentum. Over time, these small efforts turn into something meaningful and impactful.",
//     time: "09:15",
//     likes: 27
//   },
//   {
//     id: 2,
//     userId: 2,
//     content: "Building real-world projects is the fastest way to improve your development skills. You face real problems, think critically, and learn how to structure your code properly instead of just following tutorials blindly.",
//     time: "11:40",
//     likes: 31
//   },
//   {
//     id: 3,
//     userId: 1,
//     content: "Debugging is like solving a mystery. Every error message is a clue, and every fix is a step closer to understanding your system better. The more you debug, the better developer you become.",
//     time: "13:05",
//     likes: 24
//   },
//   {
//     id: 4,
//     userId: 3,
//     content: "Soft skills are just as important as technical skills. Being able to communicate your ideas clearly and work effectively with a team can make a huge difference in your career growth.",
//     time: "15:30",
//     likes: 22
//   },
//   {
//     id: 5,
//     userId: 2,
//     content: "Writing clean code is an investment in your future. It might take more time initially, but it makes your project easier to scale, debug, and maintain in the long run.",
//     time: "18:10",
//     likes: 29
//   },
//   {
//     id: 6,
//     userId: 1,
//     content: "Learning never stops in tech. There is always a new framework, tool, or concept to explore. The key is not to chase everything, but to build strong fundamentals and adapt when needed.",
//     time: "20:45",
//     likes: 33
//   }
// ];

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

let postContent = document.getElementById("postContent")
let loginCard = document.getElementById("login-card")
let signupCard = document.getElementById("signup-card")

// if (!loginCard && !signupCard) {
//   throw new Error("scripte.js: not on auth page, aborting.");
// }

// setUsersToLocalStorage('users', users)
users = getUsersFromLocalStorage('users');

// setUsersToLocalStorage('posts', posts)
posts = getUsersFromLocalStorage('posts');

// function getUsersFromLocalStorage(key) {
//   let result = JSON.parse(localStorage.getItem(key));
//   return Array.isArray(result) ? result : [];
// }

// function setUsersToLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

function userAllDataFromAllForms(){
    let form1 = getForm1DataFromSessionStorage();
    let form2 = getForm2DataFromSessionStorage();
    let form3 = getForm3DataFromSessionStorage();
    let userId = Math.floor(Math.random()*1000)
    let userFullData = {id: userId, ...form1, ...form2, ...form3,skills:[], posts:[],connections:[]  };
    setUserFullData(userFullData);
    console.log("users 1", users);
    
    users.push(userFullData);
    console.log("users 2", users);
    setUsersToLocalStorage('users', users);
    sessionStorage.setItem("currentUser", userFullData.id)
}

function setUserFullData(user){
    sessionStorage.setItem("user", JSON.stringify(user));
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
    let index = 0;
    for(let i = 0; i < users.length; i++ , index++){
        if(users[i].email == loginEmail.value && users[i].password == loginPassword.value){
            foundUser = true;
            break;
          }
        }
        
        if(foundUser){         
          sessionStorage.setItem("currentUser", users[index].id)
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
    addForm1ToSessionStorage(stUserSignupForm);
    document.getElementById("stCard").classList.remove("active");
    document.getElementById("ndCard").classList.add("active");
});
ndSignupBtn.addEventListener("click", function () {
  if(fnameSignup.value == "" || lnameSignup.value == ""){
      validation(fnameSignup)
      validation(lnameSignup)
      return;
    }
  let ndUserSignupForm = {
    firstName: fnameSignup.value,
    lastName: lnameSignup.value,
  };
  addForm2ToSessionStorage(ndUserSignupForm);
  document.getElementById("ndCard").classList.remove("active");
  document.getElementById("rdcard").classList.add("active");
});
rdSignupBtn.addEventListener("click", function(){
  // debugger
    if(countrySelect.value == ""){
      validation(countrySelect)
      return;
    }
  let rdUserSignupForm = {
    country: countrySelect.value,
    city: city.value,
  }
  addForm3ToSessionStorage(rdUserSignupForm);
  userAllDataFromAllForms()
  window.location.href = "feeds.html"

})




