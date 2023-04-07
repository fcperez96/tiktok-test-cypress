require('@cypress/xpath');

export default class HomePage {
    visit() {
        cy.visit('https://www.tiktok.com');
    }

    closeLoginModal() {
        cy.xpath('//div[@data-e2e="modal-close-inner-button"]')
            .click();
    }

    searchForHashtag(hashtag) {
        cy.get('input[type="search"]')
            .type(hashtag);
        cy.get('button[type="submit"]')
            .click();
    }

}