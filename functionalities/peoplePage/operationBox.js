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

let checkboxes = document.getElementsByClassName("person-checked");

let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if( mutation.type === 'childList') {
            checkboxes = document.getElementsByClassName("person-checked");
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener('change', function() {
                  if (this.checked) {
                    console.log("checked");
                  } else {
                    console.log("not");
                  }
                });
              }
        }
    });
});

observer.observe(document.body, {childList: true, subtree: true});

console.dir(checkboxes);

console.log(checkboxes.length)

// for(let i = 0; i < checkboxes.length; i++) {
//     const arr= [];
//     console.log(checkboxes[i] + "check elem");
// }

// Array.from(checkboxes).forEach(function (checkbox) {
//     console.log(checkbox + "here");
// })

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    if (this.checked) {
      console.log("checked");
    } else {
      console.log("not");
    }
  });
}


// function editData() {
//     for(let i = 0; i <= people.length; i++) {
//         if( checkboxes[i].value === true) {
//             console.log("checked");
//         } else {
//             console.log("not");
//         }
//     }
// }

// editData();
export { displaySection, onAddSubmit }

