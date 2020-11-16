import LopingPage from "./loginPage"

class registerPage extends LopingPage{

    userdata = null

    visit(){
        cy.visit("?controller=authentication&back=my-account")
    }

    getData(){
        cy.fixture("registerdata.json").then((data) => {
                console.log(data)
                this.userdata = data
                this.email = data.newemail + +this.stamp
                this.passws = data.passwd
        });
        console.log(this.email)
    }

    clickOnRegister(){
        const register_btn = cy.get("#submitAccount")
        register_btn.click()
    }

    registerForm(){
        cy.get('#account-creation_form').should('be.visible')
        const form = cy.get("#account-creation_form")
        form.within(()=>{
            this.fillsUserForm()
        })
    }

    fillsUserForm(){
        this.userInf()
        this.addressForm()
    }

    userInf(){
        //Personal Information
        console.log(this.userdata)
        cy.get("#id_gender1").check(this.userdata.gender)
        cy.get("#customer_firstname").type(this.userdata.firstname)
        cy.get("#customer_lastname").type(this.userdata.lastname)
        cy.get("#passwd").type(this.userdata.passwd)
        cy.get("#days").select(this.userdata.days)
        cy.get("#months").select(this.userdata.months)
        cy.get("#years").select(this.userdata.years)
        cy.get("#newsletter").check(this.userdata.newsletter)
        cy.get("#optin").check(this.userdata.option)
    }

    addressForm(){
        //Adress
        cy.get("#company").type("AB suer 12")
        cy.get("#address1").type("asdfs,asdfas,asdf")
        cy.get("#address2").type("asdasdf")
        cy.get("#city").type("Med")
        //Issue the user need select country first
        cy.get('#id_country').select("21")
        cy.get("#id_state").select("Arkansas")
        cy.get("#postcode").type("05001")
        cy.get("#other").type("Other")
        cy.get("#phone").type("123-456-7899")
        cy.get("#phone_mobile").type("123-4567-456")
    }
}

export default  registerPage;