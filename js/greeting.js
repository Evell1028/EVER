const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greet = document.querySelector("h1#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = localStorage.getItem("username");


function paintGreetings(username){
    greet.innerText = `Hello ${username}!`;  
    greet.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}
    

if(USERNAME_KEY === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(USERNAME_KEY);
}

