// Input the data
function storeUserData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById("dob").value;

    if (name && email && dob) {
        let userData = JSON.parse(localStorage.getItem('userData')) || [];
        userData.push({ name: name, dob: dob, email: email });
        localStorage.setItem('userData', JSON.stringify(userData));
    } else {
        alert('Please provide name, email, and DOB');
    }
}

// Display the data
function displayUserData() {
    let  userData = JSON.parse(localStorage.getItem('userData')) || [] ;
    let  tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    userData.forEach(function (user) {
        let  row = tableBody.insertRow();
        let  cell1 = row.insertCell(0);
        let  cell2 = row.insertCell(1);
        let  cell3 = row.insertCell(2);
        cell1.textContent = user.name;
        cell2.textContent = user.dob;
        cell3.textContent = user.email;
    });
}
displayUserData();
