const tableBody = document.getElementById("tbody");

const url = "https://micklarsen.com/Backend-1.0.1/api/persons/all";


function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

fetch(url)
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
