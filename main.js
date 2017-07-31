let table = document.querySelector('table.donationsTable');
console.log(table);

let donorsArr = Donors.getDonors();
console.log(donorsArr);

let names = [];
let donationAmounts = [];
for (var i = 0; i < donorsArr.length; i++) {
  let eachDonor = donorsArr[i];
  names.push(eachDonor.name);
  donationAmounts.push(eachDonor.pledge);
}

console.log(names);
console.log(donationAmounts);

let donationTypeDrop = document.getElementById("dropdownMenu1");
