require('@cypress/xpath');

export default class VideoPage {

    verifyVideoPlaying() {
        cy.xpath('//div[contains(@class, "xgplayer-pause")]')
            .should('not.exist');
    }

    verifyViewComments() {
        cy.xpath('//div[contains(@class, "DivCommentList")]')
            .should('be.visible');
    }

    verifyShareVideoToFriends() {
        cy.get('#icon-element-message')
            .should('be.visible');
    }

}