{
  var Donors = {
    getDonors() {
      return donors
    },
    addDonors(userObj) {
      donors.push(userObj)
    }
  };
  let donors = [
    {name: "John Doe", pledge: 90},
    {name: "Jane Doe", pledge: 80},
    {name: "Sarah Bea", pledge: 100}
  ]
}
