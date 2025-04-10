let row = document.getElementById("row");
let edit = document.getElementById("edit");
let formSubmit = document.getElementById("formSubmit");

let isEdit = true;

function handleEdit() {
  isEdit = !isEdit;
}

function handleSubmit(e) {
  e.preventDefault();
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  row.innerHTML += `
  <tr> <td>${Math.random()}</td> <td>${userName}</td> <td>${userEmail}</td> <td><button type='submit'>Edit</button> <button>Delete</button></td> </tr>
  `;
  handleEdit();
}

formSubmit.addEventListener("submit", handleSubmit);
