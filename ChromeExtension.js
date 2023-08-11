let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const btn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
// 2. Grab the unordered list and store it in a const variable called 
btn.addEventListener("click",function(){
     myLeads.push(inputEl.value)
    console.log(myLeads)
})
 // Render the leads in the unordered list using ulEl.textContent
 for(let i=0;i < myLeads.length;i++)
 {
    
    ulEl.textContent+=myLeads[i]+" "
    console.log(myLeads[i])
 }

 