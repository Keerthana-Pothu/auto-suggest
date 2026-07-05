let donations = JSON.parse(localStorage.getItem("donations")) || [];

let donationList = document.getElementById("donationList");

displayDonations();

function displayDonations(){

    donationList.innerHTML="";

    donations.forEach((donation,index)=>{

        if(donation.status==="Available"){

            donationList.innerHTML += `

            <div class="card">

            <h2>${donation.restaurant}</h2>

            <p><b>Food:</b> ${donation.food}</p>

            <p><b>Quantity:</b> ${donation.quantity}</p>

            <p><b>Pickup:</b> ${donation.pickup}</p>

            <p><b>Location:</b> ${donation.location}</p>

            <p><b>Phone:</b> ${donation.phone}</p>

            <p>${donation.description}</p>

            <button onclick="claimFood(${index})">
            Claim Food
            </button>

            </div>

            `;

        }

    });

}

function claimFood(index){

    donations[index].status="Claimed";

    localStorage.setItem("donations",JSON.stringify(donations));

    alert("Food Claimed Successfully!");

    displayDonations();

}