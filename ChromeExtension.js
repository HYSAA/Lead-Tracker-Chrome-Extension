let myLeads = ["Asdasd"]
const btn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

btn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems=""
for (let i = 0; i < myLeads.length; i++) {
       // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
      
    ulEl.innerHTML += "<li>" + myLeads[i]+ "</li>"
    ulEl.innerHTML += "<ul>" + listItems + "</ul>"
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    //other way to implement
    // create element
    // set text content
    // append to ul
    // const list=document.createElement('list')
    // list.textContent=myLeads[i]
    // ulEl.append(list) 
}
