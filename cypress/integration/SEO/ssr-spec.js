describe("SSR checking on set_name_of_pages pages", () => {
    before(() => {
        cy.visit(
            "/en/cheap-flights/london-united-kingdom/new-york-city-new-york-united-states/?botview=1",
        )
    })

    it("should have 6 oneway results", () => {
        cy.get("[data-test=Results-oneWay] [data-test=ItineraryTile]").its("length").should("equal", 6)
    })

    it("all results should point to search results with internal tracking param", () => {
        cy.get("[data-test=ResultList] [data-test=ItineraryTile]").each(link => {
            cy.commonRequest(link.attr("href"), 200)
        })
    })

    //TODO
    // add assertions for other sections
    // check all outgoing links
    // dont forget to change expected response, not for all links it has to be 200

})