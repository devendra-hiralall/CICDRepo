describe("Sample Test", () => {
    let url = "https://devendra-hiralall.github.io/CICDRepo/";

    it("Web page loads", () => {
        cy.visit(url);
    });

    it("Header check", () => {
        cy.visit(url);

        cy.get('[id="header"]').should(
            "have.text",
            "THE BEST WEB PAGE YOU'VE EVER SEEN"
        );
    });

    it("Sub header check", () => {
        cy.visit(url);

        cy.get('[id="subHeader"]').should(
            "have.text",
            "Hi Emilio :)"
        );
    });
});
