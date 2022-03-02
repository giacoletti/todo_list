describe("User can see main view of the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see main header 'To-Do List'", () => {
    cy.get("[data-cy=main-header]").should("contain.text", "To-Do List");
  });
});
