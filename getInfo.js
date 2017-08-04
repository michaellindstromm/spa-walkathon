{
  let newDonor = {}
  let transferCashBtn = document.getElementById("transferCashBtn");
  let cancelBtn = document.getElementById("cancelBtn");
  let nameInput = document.getElementById("exampleInputName2");
  let emailInput = document.getElementById("exampleInputEmail2");
  let pledgeAmountInput = document.getElementById("exampleInputAmount");
  let pledgeTypeSelect = document.getElementById("selected");

  //***************************************************
  //********* Obtain new donor info from form *********

  Donors.obtainFormInfo = (name, email, pledge, pledgeType) => {
    newDonor.name = name;
    newDonor.email = email;
    newDonor.pledge = Number(pledge);
    newDonor.pledgeType = pledgeType;
    Donors.addDonors(newDonor);
  }

  //***************************************************
  //********* Reset input fields / dropdown ***********

  Donors.resetInputFields = () => {
    nameInput.value = '';
    emailInput.value = '';
    pledgeAmountInput.value = '';
    pledgeTypeSelect.value = '';
    pledgeTypeSelect.innerHTML = `Donation Type <span class="caret"></span>`;
  }

  Donors.getNewDonor = () => {
    return newDonor;
  }

  //***********************************************************
  //********* Get new info/reset fields/updateTable ***********

  transferCashBtn.addEventListener("click", function(e) {
    Donors.obtainFormInfo(nameInput.value, emailInput.value, pledgeAmountInput.value, pledgeTypeSelect.value);
    Donors.resetInputFields();
    Donors.updateTable();
  })

  cancelBtn.addEventListener("click", Donors.resetInputFields)

  //***********************************************************
  //********* Dropdown shows correctly on selection ***********

  $(".dropdown-menu li a").click(function(){
      $("#selected").text($(this).text());
      $("#selected").val($(this).text());
  })
}
