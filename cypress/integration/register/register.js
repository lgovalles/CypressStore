///  <reference types="cypress"/>

import mainPage from "../../PO/mainPage"
import registerPage from "../../PO/registerPage"


const main = new mainPage()
const register = new registerPage()


before(() =>{
    register.getData()
})

afterEach(()=>{
    register.clickOnSignOut()
})

// Register 
Given('The user is on Homepage', () => {
    main.visit()
})

When('the user clicks on Sign in', () => {
    main.clickOnLogin();
})

And('user enters email',()=>{
    register.typeNewEmail()
})

And('User Clicks create an account',()=>{
    register.clickOnCreateAccount()
    
})

And('User fills sign up form',()=>{
    register.registerForm()
})

And('user clicks register',()=>{
    register.clickOnRegister()
})

Then('the user is taken my account page',()=>{
    register.assserLogin()
})

//Login 
Given("the user has a valid account",()=>{

}) 

Then("the clicks on sign in",()=>{
    main.clickOnLogin()
}) 

And("enters email",()=>{
    register.typeEmail()
})

And("enters password",()=>{
    register.typePass()
}) 

And("clicks sign in",()=>{
    register.clickOnSingIn();
}) 

Then("the user is successfully logged in",()=>{
    register.assserLogin()
}) 