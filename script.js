let display = document.getElementById('airtimeGenerated');
let network = document.getElementById("netWork");
let price = document.getElementById("amount");
let recharge = document.getElementById("recharge")
let randomNumber = Math.floor(Math.random() * 1000000000000000);


function generateAirtime() {
    if (network.value === 'none' && price.value === 'empty') {
        alert('Plaese select a network provider and airtime amount');
    } 
    else if 
     (network.value === 'none') {
            alert('Plaese select a network provider');
    } 
    else if (price.value === 'empty') {
        alert('Plaese select an Airtime amount');
} 
    else {
        display.innerText = randomNumber
    }  
}

function loadAirtime() {
    if      (network.value === "mtn" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert( "#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful")
    }
    else if (network.value === "mtn" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Code")
    }
    else if (network.value === "mtn" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Pin")
    }
    else if (network.value === "glo" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert( "#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful")
    }
    else if (network.value === "glo" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Code")
    }
    else if (network.value === "glo" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Pin")
    }
    else if (network.value === "airtel" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert( "#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful")
    }
    else if (network.value === "airtel" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
    alert( "Invalid Recharge Code")
    }
    else if (network.value === "airtel" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Pin")
    }
    else if (network.value === "9mobile" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
    alert( "#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful")
    }
    else if (network.value === "9mobile" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Code")
    }
    else if (network.value === "9mobile" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert( "Invalid Recharge Pin")
    }
     else {
        alert("Recharge failed")
    }
}
// function loadAirtime(params) {
    
// }