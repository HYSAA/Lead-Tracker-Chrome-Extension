const btn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el").value
let myLeads=[]


btn.addEventListener("click",function(){
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
     
    myLeads.push(inputEl)
    console.log(myLeads)
    console.log("Button clicked!")
})

