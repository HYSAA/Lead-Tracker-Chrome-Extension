let myLeads = []
const btn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem("myLeads","youtube.com")
//set item para maka input ug links
localStorage.clear
console.log(localStorage.getItem("myLeads"))











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