describe("template spec", () => {
  it("passes", () => {
    cy.visit("/")
    cy.get("[data-test='hero-heading']").should(
      "have.text",
      "Testing Next.js Applications with Cypress"
    )
  })
})
