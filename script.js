
function getData(){
    
    let userName = document.getElementById("userName").value;
    let userAge = document.getElementById("userAge").value;  
    let userCity = checkCity()
    alert(`Name: ${userName}\nAge: ${userAge}\nCity: ${userCity}`)
}

function checkCity(){
    const city = "";
    document.getElementsByName("city")
    .forEach (radio => {
        if(radio.checked){
            alert(city)}}
    )
}

