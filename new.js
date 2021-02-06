fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => getCountries(data))








  
  function getCountries(count){
      console.log(count)
    const countries = document.getElementById('all-countries')
    count.forEach(country => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `<h1>${country.name}</h1>
        <button style="background-color:white" onclick="displayCountryDetails('${country.name}')">details</button>
        `
        newDiv.classList.add("divStyle")
        newDiv.style.backgroundImage = `url('${country.flag}')`
        countries.appendChild(newDiv)
    });
}
function displayCountryDetails(name){

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
 }

 const renderCountryInfo = country => {
     console.log(country)
    const countryDiv = document.getElementById('countryDetails')
    countryDiv.innerHTML = `
        <h1>Country Name:${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">

    `
}
   

  