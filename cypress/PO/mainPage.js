
class MainPage{
    visit(){
        cy.visit("/")
    }

    clickOnLogin(){
        const login_bnt = cy.get("a.login");
        login_bnt.click();
    }
}

export default MainPage;