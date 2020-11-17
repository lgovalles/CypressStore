import Common from "./common"

class LopingPage extends Common{

    email = ""
    passws = ""
    stamp = this.timesStamp()

    visit(){
        cy.visit("?controller=authentication&back=my-account")
    }

    getData(){
        cy.fixture("logindata.json").then((data) => {
                console.log(data)
                this.email = data.email
                this.passws = data.passws
        });
        console.log(this.email)
    }
    
    clickOnCreateAccount(){
        const create_btn = cy.get("#SubmitCreate")
        create_btn.click();    
    }

    clickOnSingIn(){
        const singin_btn = cy.get("#SubmitLogin")
        singin_btn.click();    
    }

    typeNewEmail(){
        const newemail_input = cy.get("#email_create")
        newemail_input.type(this.email)
    }

    typeEmail(){
        const email_input = cy.get("#email")
        email_input.type(this.email)
    }

    typePass(){
        const pass_input = cy.get("#passwd")
        pass_input.type(this.passws)
    }

    asserLogin(){
        cy.url().should('include', 'my-account')
        cy.get("span.navigation_page").should("contain","My account")
        cy.get("h1.page-heading").should("be.visible")
    }

    clickOnSignOut(){
        const logout = cy.get("a.logout")
        logout.click()
    }

    assertDuplicateEmail(){
        const assetemail = cy.get("#create_account_error")
        assetemail.should("be.visible").and("contain","An account using this email address has already been registered")
    }
}

export default LopingPage;