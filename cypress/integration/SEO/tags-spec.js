//TODO
//add list of URLs when u want to check tags
const urls = [
    "url1",
    "url2",
    "url3"
]

//TODO
//check diff types of tag
//check other values - follow, index
describe("check pages with x-robots-tag set to noindex/none", () => {
    urls.forEach(url => {
        it("check response and x-robots-tag for  specific_url", () => {
            cy.request({url}).then(response => {
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property("x-robots-tag").to.be.oneOf(["none", "noindex"])
            })
        })
    })
})
