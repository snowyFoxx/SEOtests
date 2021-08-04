const url = "https://www.sme.sk/robots.txt"
describe("Robots.txt tests", () => {
    it("Check disallowed pages on production", () => {
        cy.requestTXT(url).then(txt => {
            expect(txt)
                .to.contain("Disallow: /poll/vote/")
                .to.contain("Sitemap: https://www.sme.sk/sitemap.xml")
        })
    })
})
