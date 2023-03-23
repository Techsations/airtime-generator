function generateAirtime() {
    let display = document.getElementById('airtimeGenerated');
    let network = document.getElementById("netWork");
    let price = document.getElementById("amount");
    if (network.value === 'none' && price.value === 'empty') {
        alert('Plaese select a network provider and airtime amount')
    } 
    else if 
     (network.value === 'none') {
            alert('Plaese select a network provider')
    } 
    else if (price.value === 'empty') {
        alert('Plaese select an Airtime amount')
} 
    else {
        display.innerText = Math.floor(Math.random() * 1000000000000000)
    }  
}