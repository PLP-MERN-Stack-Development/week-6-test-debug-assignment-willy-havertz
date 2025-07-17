describe("Login Form", () => {
  it("should input email and password and click login", () => {
    cy.visit("/");
    cy.get('input[placeholder="Email"]').type("test@example.com");
    cy.get('input[placeholder="Password"]').type("password123");
    cy.contains("Login").click();
  });
});
