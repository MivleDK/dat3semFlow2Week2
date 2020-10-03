const url = "http://restcountries.eu/rest/v1/alpha?codes=";
const url2 = "http://localhost:8080/APIProxy/ReqRespServlet?request=";

const txt_hoveredCountryCode = document.getElementById("txt_hoveredCountryCode");
const txt_countryName = document.getElementById("txt_countryName");
const txt_countryPopulation = document.getElementById("txt_countryPopulation");
const txt_countryArea = document.getElementById("txt_countryArea");
const txt_countryBorders = document.getElementById("txt_countryBorders");
var lastStyled = "dk";

//Get the country ID for hovered country.
document.getElementById("svgDiv").addEventListener("mouseover", function (event) {
    var countryID = event.target.id;
    if (countryID === "svgDiv") {
        return;
    }
    txt_hoveredCountryCode.innerHTML = countryID;

    document.getElementById("svgDiv").addEventListener("mouseout", function () {
        txt_hoveredCountryCode.innerHTML = "";
    })
});

//API Fetch error handling
function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

//Get the country ID for clicked country.
document.getElementById("svgDiv").addEventListener("click", function (event) {
    document.getElementById(lastStyled).style.fill = "#c0c0c0"; //Color last selected element grey
    let countryID = event.target.id; //Get the country ID
    lastStyled = countryID; //Set the current country to lastStyled, so that the next time, the current country is grey again
    
    document.getElementById(countryID).style.fill = "#ff0000";
    if (countryID === "svgDiv") { // The if's are bad hacks to ensure the APi recognises the country
        return;
    } else if (countryID == "ru-main"){
        countryID = "ru";
    } else if (countryID == "gb-gbn"){
        countryID = "gb";
    }
    else if (countryID == "gb-nir"){
        countryID = "ie";
    }
    fetch(url + countryID)
        .then(res => fetchWithErrorCheck(res))
        .then((data) => {
            const countryInfo = data.map((country) => {
                txt_countryName.innerHTML = country.name;
                txt_countryPopulation.innerHTML = country.population;
                txt_countryArea.innerHTML = `${country.area} km2`;
                txt_countryBorders.innerHTML = country.borders;
            });

        });
});
