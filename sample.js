let cityList = [
    { city: "Beja", population: 36000, region: "Alentejo" },
    { city: "Lisboa", population: 504718, region: "Centro" },
    { city: "Porto", population: 214349, region: "Norte" },
    { city: "Bragança", population: 34582, region: "Minho" }
  ];
  
  function getCity(input) {
    let output = "Selected city does not exist";
    for (i = 0; i < cityList.length; i++) {
      if (input === cityList[i].city) {
//     output = `Displaying info for ${cityList[i].city}:\n\nPopulation: ${cityList[i].population}\nRegion: ${cityList[i].region}`;
        output=cityList[i].city
}
     
    }
    return output;
  }
  
  function getCityPop(input) {
    let output =`Cities under ${input} population:\n`;
    for (i = 0; i < cityList.length; i++) {
      if (input > cityList[i].population) {
//     output = `Displaying info for ${cityList[i].city}:\n\nPopulation: ${cityList[i].population}\nRegion: ${cityList[i].region}`;
        output += `\n${cityList[i].city}`
}
    }
    return output
  }

  final = getCityPop(50000)
  
  console.log(final);