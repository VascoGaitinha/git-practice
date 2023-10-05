
function getData(){
    let userName = document.getElementById("userName").value;
    let userAge = document.getElementById("userAge").value;
    alert(`Name: ${userName}\nAge: ${userAge}`)
}

function checkCity(){
    let choice = document.getElementsByName("city").value
    
    alert(`Name: ${choice}`)
}