{
  var Donors = {

    //********************************************************
    //********* Add and get donor array of objects ***********

    getDonors() {
      return donors
    },
    addDonors(userObj) {
      donors.push(userObj)
    }
  };

  //************************************************************
  //********* Initial donor array of objects *******************

  let donors = [
    {name: "John Doe", email:"john@example.com", pledge: 90, pledgeType: "Lump Sum"},
    {name: "Jane Doe", email:"jane@example.com", pledge: 8, pledgeType: "Per Lap"},
    {name: "Susan Jessica", email:"bea@example.com", pledge: 100, pledgeType: "Lump Sum"}
  ]
}
