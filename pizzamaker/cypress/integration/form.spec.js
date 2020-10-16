describe("Form App", () => {
  
    //Schedule us to navigate to localhost before we run each test
    beforeEach(() => {
    cy.visit("http://localhost:3001/form");
  });

  //Helpers to avoid tons of repetition
  const pizzaSizeInput = () => cy.get("input[name=pizzasize]");
  const pizzaSauceInput = () => cy.get("input[name=sauce]");
  const gFreeInput = () => cy.get("input[name=gfree]");
  const specialInput = () => cy.get("input[name=special]");
  const subButton = () => cy.get("button[id=submitBtn]");

  //it keyword for tests
  it("The proper elements exist", () => {
    pizzaSizeInput().should("exist");
    pizzaSauceInput().should("exist");
    gFreeInput().should("exist");
    specialInput().should("exist");
    subButton().should("exist");

    describe("can select inside  of the imputs and submit", () => {
      
        //testing pizza size works
      pizzaSizeInput()
        .should("have.value", "")
        .click("Small pizza")
        .should("have.value", "small");
      
        //testing if tyler@gmail.com can be typed in email textbox
      pizzaSauceInput()
        .should("have.value", "")
        .click("original red")
        .should("have.value", "original red");
      
        //testing if user name tyler can be typed in userName textbox
      gFreeInput()
        .should("have.value", "")
        .click("Gluton free crust? (+$1.00)")
        .should("have.value", "true");
      
        //testing if password can be typed in password textbox
      specialInput()
        .should("have.value", "")
        .type("extra well")
        .should("have.value", "extra well");
      

      
      //testing if the submit button submits and resets the form
      subButton().click();
    });
  });
});
