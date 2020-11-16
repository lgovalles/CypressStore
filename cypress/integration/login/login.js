import mainPage from "../../PO/mainPage"
import loginPage from "../../PO/loginPage"

const main = new mainPage()
const login = new loginPage()

before(()=>{
    login.getData()
})

afterEach(()=>{
    login.clickOnSignOut()
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
    login.assserLogin()
}) 