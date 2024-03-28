let myLeads = [];
const btn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const delbtn = document.getElementById("delete-btn");
const savebtn=document.getElementById("save-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
//lmaoo sayop 




btn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    console.log(localStorage.getItem("myLeads"));
  
});

delbtn.addEventListener("dblclick",function()
{
  
  localStorage.clear("myLeads")
  myLeads=[];
  renderLeads(myLeads)
  console.log(myLeads)
});


savebtn.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads(myLeads)
  })

})

// Attach event listeners to checkboxes for the "change" event
ulEl.addEventListener("change", function(event) {
  // Check if the changed element is a checkbox
  if (event.target.type === "checkbox") {
    const checkboxId = event.target.id;
    const index = parseInt(checkboxId.split("-")[1]); // Extract the index from the checkbox ID
   
    console.log(index)
    // If the checkbox is unchecked, remove the corresponding data item
    if (!event.target.checked) {
      myLeads.splice(index, 1);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      renderLeads(myLeads);
    }
  }
});


const renderLeads = (leads) => {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li id="whole">
        <input type= "checkbox" id="lead-${i}" checked>
        <a target="_blank"  id="secondWhole"href="${leads[i]}"> 
          ${leads[i]} 
        </a>
      </li>
    `;
  }
  //asdasd
  ulEl.innerHTML = listItems;
};

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads(myLeads)
}
