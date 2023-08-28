
const btn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const delbtn = document.getElementById("delete-btn");
const savebtn=document.getElementById("save-btn")
let myLeads = [];

btn.addEventListener("click", function () {
  if (inputEl.value.trim() !== "") {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    console.log(localStorage.getItem("myLeads"));
  }
});

savebtn.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
  })

})

delbtn.addEventListener("dblclick", function () {
  // my code
  myLeads = []; // Clear the array
  ulEl.textContent = ""; 
  localStorage.removeItem("myLeads"); 
  
  
  //scrimba code
  // localStorage.clear()
  // myLeads=[]
  // renderLeads()

});

const renderLeads = (leads) => {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${leads[i]}"> 
          ${leads[i]} 
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
};
//unused function
const deleteEl = () => {
  myLeads = []; // Clear the array
  ulEl.textContent = ""; // Clear the list content
  localStorage.removeItem("myLeads"); // Remove data from localStorage
};

