
function getData(){
    let userName1 = document.getElementById("userName1").value;
    let userName2 = document.getElementById("userName2").value;
    let userAge = document.getElementById("userAge").value;  
    let userGender = checkGender()
    let userCity = checkCity()
    let userSkills = checkSkills()
    alert(`Please confirm submited data:\n\nName: ${userName1} ${userName2}\nAge: ${userAge}\nGender: ${userGender}\nCity: ${userCity}\nSkills: ${userSkills}`)

}

function checkCity(){    
   let cities
   document.getElementsByName("city")
    .forEach (radio => {
        if(radio.checked === true){
            cities=radio.value
        }
    }
    )
    return cities
}

function checkGender(){
    optionList = document.querySelector('#userGender');
    selectedGender = optionList.options[optionList.selectedIndex].value;
        return(selectedGender)
}

function checkSkills(){
    let skills = []
    document.getElementsByName("userSkills")
     .forEach (checkbox => {
         if(checkbox.checked === true){
            skills.unshift(checkbox.value)
         }
     }  
     )
     return skills    
 }