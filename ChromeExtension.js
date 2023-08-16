let myLeads = []
const btn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

btn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i]+ "</li>"
    console.log(myLeads[i])
}
