function saveDonation(){

let restaurant=document.getElementById("restaurant").value;
let food=document.getElementById("food").value;
let quantity=document.getElementById("quantity").value;
let pickup=document.getElementById("pickup").value;
let location=document.getElementById("location").value;
let phone=document.getElementById("phone").value;
let description=document.getElementById("description").value;

if(
restaurant==""||
food==""||
quantity==""||
pickup==""||
location==""||
phone==""
){
alert("Please fill all fields");
return;
}

let donations=JSON.parse(localStorage.getItem("donations"))||[];

donations.push({
restaurant,
food,
quantity,
pickup,
location,
phone,
description,
status:"Available"
});

localStorage.setItem("donations",JSON.stringify(donations));

alert("Donation Added Successfully!");

document.querySelector("form").reset();

}