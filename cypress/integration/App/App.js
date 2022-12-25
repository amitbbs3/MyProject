import { Given, Then, Before, When } from "cypress-cucumber-preprocessor/steps";

const baseUrl = Cypress.env("baseUrl");

Given("I am on the app page", () => {
  cy.visit(baseUrl);
  cy.login();
});

Then("I should see my {int} GitHub projects", (number) => {
  cy.get(".gh-list-item").should("have.length", 28);
});

Then("I should see my email in the header", () => {
  const testEmail = "ahsan@example.com";
  const userEmail = cy.get("#userEmail");
  userEmail.should("be.visible");
  userEmail.should("have.text", testEmail);
});

When("I click the logout button", () => {
  cy.get("#logoutButton").click();
});

Then("I should be logged out", () => {
  cy.url().should("equal", `${Cypress.env("baseUrl")}/#/login`);
});
