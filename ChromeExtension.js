
const btn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const delbtn = document.getElementById("delete-btn");

let myLeads = [];

btn.addEventListener("click", function () {
  if (inputEl.value.trim() !== "") {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    console.log(localStorage.getItem("myLeads"));
  }
});

delbtn.addEventListener("dblclick", function () {
  //my code
  // myLeads = []; // Clear the array
  // ulEl.textContent = ""; // Clear the list content
  // localStorage.removeItem("myLeads"); // Remove data from localStorage
  localStorage.clear()
  myLeads=[]
  renderLeads()

});

const renderLeads = () => {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${myLeads[i]}"> 
          ${myLeads[i]} 
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

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}
