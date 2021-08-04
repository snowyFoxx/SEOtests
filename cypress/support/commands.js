//TODO
//add other params to request as eg followRedirect etc

Cypress.Commands.add(
    "requestTXT",
    (url, expectedStatus = 200) => {
        return cy
            .request({
                url
            })
            .then(response => {
                expect(response.status).to.eq(expectedStatus)
                return response.body
            })
    },
)

Cypress.Commands.add("commonRequest", (link, expectedStatus = 200) => {
    cy.request(link).then(response => {
        expect(response.status, `${link} not status ${expectedStatus}`).to.eq(expectedStatus)
    })
})