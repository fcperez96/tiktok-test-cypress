require('@cypress/xpath');

export default class SearchResultsPage {

    verifySearchResults() {
        cy.xpath('//div[contains(@class,"DivButton")]')
            .click();
        cy.wait(2000);
        cy.get('#tabs-0-tab-search_top')
            .should('be.visible');
        cy.xpath('(//div[@data-e2e="search_top-item"])[1]')
            .should('be.visible');
    }

    selectFirstVideo() {
        cy.xpath('//div[@data-e2e="search_top-item"]')
            .first()
            .click();
    }

}