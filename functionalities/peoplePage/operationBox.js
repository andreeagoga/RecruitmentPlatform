import { people } from "./people.js";
import { createNewList } from "./createPeopleList.js";
/*
operation box
 */

function displaySection(container, btnAdd, btnHide, submitBtnAdd){
    btnAdd.addEventListener('click', function () {
        container.style.transform = 'translateX(0)';
    })
    btnHide.addEventListener('click', function () {
        container.style.transform = 'translateX(200%)';
    })
    submitBtnAdd.addEventListener('click', function () {
        container.style.transform = 'translateX(200%)';
    })
    submitBtnAdd.addEventListener('click', function () {
        container.style.transform = 'translateX(200%)';
    })
}

/*
add people
 */
function onAddSubmit(currentPage, rows, pages) {
    let formData = readAddFormData();
    addData(formData, currentPage, rows, pages);    
    let initialFormData = document.getElementById('form-add-people');
    initialFormData.reset();

}

function readAddFormData(){
    let formData = {};
    formData['name'] = document.getElementById('name').value;
    formData['job'] = document.getElementById('job').value;
    formData['date'] = document.getElementById('date').value;
    // formData['status'] = document.getElementById('status').value;
    console.log(formData);

    return formData;
}

function addData(data, currentPage, rows, pages) {

    if(people.length % rows === 0){
        pages++;
    }
    currentPage = pages;
    people.push(data);

    createNewList(people, currentPage, rows, pages);      
}

/*
edit people
*/
function onEditSubmit() {
    let formData = readAddFormData();
    editData();

}
const peopleList = document.getElementsByClassName("people-item");
console.log(peopleList);
let checkboxes = document.getElementsByClassName("person-checked");

function checkCheckbox(){
    let checkedItems = [];
    for (let i = 0; i < peopleList.length; i++){
        
        // for (let i = 0; i < checkboxes.length; i++) {
        //     checkboxes[i].addEventListener('change', function() {
        //         if (this.checked) {
        //             this.setAttribute("checked", "");
        //             checkedItems.push(checkboxes[i]);
        //             console.log(checkedItems);
        //         } else {
        //             this.removeAttribute("checked");
        //         }
        //     });
        // }
    }   
}


// editData();
export { displaySection, onAddSubmit, checkCheckbox, checkboxes }

