import mainPage from "../../PO/mainPage"
import loginPage from "../../PO/loginPage"

const main = new mainPage()
const login = new loginPage()

before(()=>{
    login.getData()
})

afterEach(()=>{
    console.log("AfterEach")
})

//Duplicate email
Given('The user is on Homepage', () => {
    main.visit()
})

When('the user clicks on Sign in', () => {
    main.clickOnLogin();
})

And("user enters a duplicate email",()=>{
    login.typeNewEmail()
}) 

And('User Clicks create an account',()=>{
    login.clickOnCreateAccount()
})

Then("the system shows an error",()=>{
    login.assertDuplicateEmail()
})

// Login
Given("the user has a valid account",()=>{
    main.visit()
}) 
Then("the clicks on sign in",()=>{
    main.clickOnLogin()
}) 
And("enters email",()=>{
    login.typeEmail()
})
And("enters password",()=>{
    login.typePass()
}) 
And("clicks sign in",()=>{
    login.clickOnSingIn()
}) 
Then("the user is successfully logged in",()=>{
    login.asserLogin()
}) 