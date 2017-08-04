{

  let tableContainer = document.getElementById("tableContainer");

  let table = document.querySelector("table.table > tbody");
  console.log();

  //*************************************************
  //********* Add new Donor to Table ****************

  Donors.updateTable = () => {
    let newDonor = Donors.getNewDonor();
    let newDonorRow = document.createElement("TR");
    content = `
    <td>${newDonor["name"]}</td>
    <td>$${newDonor["pledge"]}.00</td>
    <td>${newDonor["pledgeType"]}</td>`
    newDonorRow.innerHTML = content;
    table.appendChild(newDonorRow)
  }

  //************************************************
  //********* Create First Donors for Table *********

  let donorsArr = Donors.getDonors();
  for (var i = 0; i < donorsArr.length; i++) {
    let row = document.createElement("TR");
    content = `
    <td>${donorsArr[i]["name"]}</td>
    <td>$ ${donorsArr[i]["pledge"]}.00</td>
    <td>${donorsArr[i]["pledgeType"]}</td>
    `
    row.innerHTML = content;
    table.appendChild(row);
  }
}
