// SIGN UP
function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if(name=="" || email=="" || password=="" || role==""){
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.find(user => user.email === email);

    if(userExists){
        alert("User already exists");
        return;
    }

    users.push({
        name,
        email,
        password,
        role
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href="login.html";
}

// LOGIN
function login(){

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let users=JSON.parse(localStorage.getItem("users")) || [];

    let user=users.find(u=>u.email===email && u.password===password);

    if(user){

        localStorage.setItem("currentUser",JSON.stringify(user));

        alert("Login Successful");

        if(user.role==="donor"){
            window.location.href="donor.html";
        }
        else{
            window.location.href="ngo.html";
        }

    }
    else{
        alert("Invalid Email or Password");
    }

}