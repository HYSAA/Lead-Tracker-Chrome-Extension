let myLeads = []
const btn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

btn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
})
////mo render sa screen
const renderLeads = () => {
let listItems=" "
for (let i = 0; i < myLeads.length; i++) {
   listItems += "<li> <a href='youtube.com'>" + myLeads[i] + "</a> </li>"
   console.log(listItems)
}
ulEl.innerHTML=listItems
}
    // const list=document.createElement('list')
    // list.textContent=myLeads[i]
    // ulEl.append(list) 