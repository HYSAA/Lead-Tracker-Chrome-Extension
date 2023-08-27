// let myLeads =[]
// const btn = document.getElementById("input-btn")
// const inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")
// const delbtn = document.getElementById("delete-btn")
// btn.addEventListener("click", function () {
//   if(myLeads===null){
//     myLeads=[]
//     inputEl.value=""
//     // localStorage.setItem("myLeads",JSON.stringify(myLeads))
//     // renderLeads()
//     // console.log(localStorage.getItem("myLeads"))
//   }else{
//     myLeads.push(inputEl.value)
//     inputEl.value=""
//     localStorage.setItem("myLeads",JSON.stringify(myLeads))
//     renderLeads()
//     console.log(localStorage.getItem("myLeads"))
//   }
 
// })
// delbtn.addEventListener("click",function(){
//   deleteEl()

// });
// ////mo render sa screen
// const renderLeads = () => {
// let listItems=" "
// for (let i = 0; i < myLeads.length; i++) {
//      listItems += `
//     <li>
//     <a target='_blank' href='  ${myLeads[i]}'> 
//     ${myLeads[i]} </a> </li>
//     `
// }
// ulEl.innerHTML=listItems
// }
// const deleteEl = () =>{

//   if(ulEl)
// ulEl.textContent=""
//   localStorage.clear();

// }

// let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
// if(leadsFromLocalStorage){
//   myLeads= leadsFromLocalStorage
//     renderLeads()
// }
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

delbtn.addEventListener("click", function () {
  deleteEl();
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

const deleteEl = () => {
  myLeads = []; // Clear the array
  ulEl.textContent = ""; // Clear the list content
  localStorage.removeItem("myLeads"); // Remove data from localStorage
};

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}
