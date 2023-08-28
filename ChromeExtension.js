let myLeads = [];
const btn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const delbtn = document.getElementById("delete-btn");
const savebtn=document.getElementById("save-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

btn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    console.log(localStorage.getItem("myLeads"));
  
});

savebtn.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads(myLeads)
  })

})

delbtn.addEventListener("dblclick", function () {

  localStorage.clear()
  myLeads=[]
  renderLeads(myLeads)

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
};if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads(myLeads)
}
//unused function
// const deleteEl = () => {
//   myLeads = []; // Clear the array
//   ulEl.textContent = ""; // Clear the list content
//   localStorage.removeItem("myLeads"); // Remove data from localStorage
// };

