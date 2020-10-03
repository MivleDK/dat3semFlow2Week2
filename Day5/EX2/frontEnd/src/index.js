import 'bootstrap/dist/css/bootstrap.css'

const tableBody = document.getElementById("tbody");
const url = "https://micklarsen.com/Backend-1.0.1/api/persons";

function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

fetch(`${url}/all`)
    .then(res => fetchWithErrorCheck(res))
    .then(data => {
        data.all.forEach(elem => {
            const tableRow = `<tr><td>${elem.id}</td><td>${elem.firstName}<td>${elem.lastName}</td><td>${elem.phone}</td></td></tr>`;
            tableBody.innerHTML += tableRow;
        });
    })
    .catch(err => {
        if (err.status) {
            err.fullError.then(e => console.log(e.detail))
        }
        else { console.log("Network error"); }
});

document.getElementById("btn_addNewPerson").addEventListener("click", function(){
    var firstName = document.getElementById("inp_firstName").value;
    var lastName = document.getElementById("inp_lastName").value;
    var phone = document.getElementById("inp_phone").value;

    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            phone: phone
        })
    }
    fetch(url, options);
});