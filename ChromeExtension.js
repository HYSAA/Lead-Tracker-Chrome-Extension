let myLeads =[]
// myLeads=JSON.parse(myLeads)//makes the string into an array
// myLeads.push("fb.com")
// myLeads=JSON.stringify(myLeads)//makes a array into a string
// console.log(typeof myLeads)
const btn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
btn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value=""
       // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})
////mo render sa screen
const renderLeads = () => {
let listItems=" "
for (let i = 0; i < myLeads.length; i++) {
     listItems += `
    <li>
    <a target='_blank' href='  ${myLeads[i]}'> 
    ${myLeads[i]} </a> </li>
    `
}
ulEl.innerHTML=listItems
}
