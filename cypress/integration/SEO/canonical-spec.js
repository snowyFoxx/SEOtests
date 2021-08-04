describe("Check canonicals", () => {
    it("should check canonical", () => {
        cy.visit("/cz/airline/fr/ryanair/")
        cy.get('link[rel="canonical"]').should("contain.attr", "href", "https://www.kiwi.com/cz/airline/fr/ryanair/")
    })
    //TODO
    //in the same way u can check alternates links
    //also is good to check if they have expected responses or not
})