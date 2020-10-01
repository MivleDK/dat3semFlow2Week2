import 'bootstrap/dist/css/bootstrap.css'

/*
## Get all users
*/

const tableBody = document.getElementById("tbody");

const url = "http://localhost:3333/api/users";



fetch(url, options)
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const tableRows = data.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`;
        });
        const tableBodyString = tableRows.join("");
        tableBody.innerHTML = tableBodyString;
    });


function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

/*
## Get user by ID
*/

document.getElementById("btn_UserByID").onclick = () => {
    const id = document.getElementById("inp_UserByID").value;
    fetch(url + "/" + id)
        .then(res => fetchWithErrorCheck(res))
        .then(user => {
            const userString = `<b>Name:</b> ${user.name} <b>Age:</b> ${user.age} <b>Gender:</b> ${user.gender} <b>Email:</b> ${user.email}`;
            document.getElementById("txt_userByID").innerHTML = userString;
        });
}

/*
## Insert user
*/
document.getElementById("btn_InsertPerson").onclick = () => {

    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("inp_InsertName").value,
            age: document.getElementById("inp_InsertAge").value,
            gender: document.getElementById("inp_InsertGender").value,
            email: document.getElementById("inp_InsertMail").value
        })
    }
    fetch(url, options);
    location.reload();
}

/*
## Edit user
*/
document.getElementById("btn_UpdatePerson").onclick = () => {

    const updateID = document.getElementById("inp_UpdateID").value;

    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("inp_UpdateName").value,
            age: document.getElementById("inp_UpdateAge").value,
            gender: document.getElementById("inp_UpdateGender").value,
            email: document.getElementById("inp_UpdateMail").value
        })
    }
    fetch(`${url}/${updateID}`, options);
    location.reload();
}

/*
## Delete user
*/

document.getElementById("btn_DeleteID").onclick = () => {
    const deleteID = document.getElementById("inp_DeleteID").value;

    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(`${url}/${deleteID}`, options)
    location.reload();
}
