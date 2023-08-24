let myLeads = `["fn.com"]`
// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string
myLeads=JSON.parse(myLeads)//makes the string into an array
myLeads.push("fb.com")
myLeads=JSON.stringify(myLeads)//makes a array into a string
console.log(typeof myLeads)

const btn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



localStorage.setItem("myLeads","youtube.com")

let name= localStorage.getItem("myLeads")
console.log(name)







btn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
})
////mo render sa screen
const renderLeads = () => {
let listItems=" "
for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a  target='_blank' href='"+ myLeads[i] + "' >" + myLeads[i] + "</a></li>"
  
     listItems += `
    <li>
    <a target='_blank' href='  ${myLeads[i]}'> 
    ${myLeads[i]} </a> </li>
    `
}
ulEl.innerHTML=listItems
}
//commit purposes
    // const list=document.createElement('list')
    // list.textContent=myLeads[i]
    // ulEl.append(list) 