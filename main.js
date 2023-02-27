import { hideDropdown, showDropdown } from "./functionality/dropdown.js";

import { goToFirstSlide, goToPreviousSlide } from "./functionality/carousel.js";

import { people } from "./functionality/people.js";

import { jobs } from "./functionality/jobs.js";

import { displaySection, submitBtnAdd } from "./functionality/operationBox.js";

import { createJobList } from "./functionality/createJobList.js";

/*
Dropdown user menu
 */
const dropdownButton = document.getElementById('dropdown-button');

dropdownButton.addEventListener("click", showDropdown);
window.addEventListener("mousedown", hideDropdown);


/*
Carousel
 */
const nextSlide = document.querySelector(".carousel-next-button");
const prevSlide = document.querySelector(".carousel-prev-button");

nextSlide.addEventListener("click", goToFirstSlide);
prevSlide.addEventListener("click", goToPreviousSlide);


/*
pagination list
 */

let currentPage = 1;
let rows = 5;
let lessPages = 2;
let pages = Math.ceil(people.length / rows);


const peopleList = document.getElementById('list');
const peopleItem = document.getElementsByClassName('people-item');
const pagination = document.getElementById('pagination');

function pageSetup(array, page, rows){
    let start = rows * (page-1);
    let end = start + rows;
    let paginatedItems = array.slice(start, end);

    return {
        paginatedItems, pages
    };

}
function createNewList(array){
    peopleList.innerHTML='';
    let data = pageSetup(array, currentPage, rows);
    let items = data.paginatedItems;

    for(let i = 0; i < items.length; i++){
        const item = document.createElement('li');
        peopleList.appendChild(item);
        const itemList = document.createElement('ul');
        itemList.classList.add('people-item');
        item.appendChild(itemList);
        let list = `
            <li>${items[i].name}</li>
            <li>${items[i].job}</li>
            <li>${items[i].date}</li>
        `;
        peopleItem[i].innerHTML = list;

    }
    createButtons(currentPage);
}

createNewList(people);

function createButtons(page) {
    pagination.innerHTML = '';
    let activePage;

    let maxLeft = page - Math.floor(lessPages / 2);
    let maxRight = page + Math.floor(lessPages / 2);

    if(maxLeft < 1){
        maxLeft = 1;
        maxRight = lessPages;
    }

    if(maxRight > pages) {
        maxLeft = pages - (lessPages - 1);

        maxRight = pages;

        if(maxLeft < 1) {
            maxLeft = 1;
        }
    }


    for (let i = maxLeft; i <= maxRight; i++) {
        if(page === i){
            activePage = 'active';
        } else {
            activePage = '';
        }
        pagination.innerHTML += `<button value=${i} class="search-button people-button number-button ${activePage}">${i}</button>`
    }

    if( currentPage !== 1) {
        pagination.innerHTML = `
            <button value=${1} class="search-button people-button left-pagination">
                <i class="fa-solid fa-circle-chevron-left"></i>
            </button>`
            + pagination.innerHTML;
    }

    if(currentPage !== pages) {
        pagination.innerHTML += `
            <button value=${pages} class="search-button people-button right-pagination">
               <i class="fa-solid fa-circle-chevron-right"></i>
            </button>`;

    }

    const allPageButtons = document.getElementsByClassName('number-button');

    Array.from(allPageButtons).forEach((elem) => {
        elem.addEventListener('click', function () {
            peopleList.innerHTML = '';
            currentPage = Number(this.value);

            createNewList(people);
        })
    })

    const leftButton = document.getElementsByClassName('left-pagination')[0];
    if(leftButton){
        leftButton.addEventListener('click', function() {
            currentPage--;
            createNewList(people);
        });
    }

    const rightButton = document.getElementsByClassName('right-pagination')[0];
    if(rightButton) {
        rightButton.addEventListener('click', function () {
            currentPage++;
            createNewList(people)
        });
    }

}

/*
operation box
 */

const box = document.getElementsByClassName('box-people')[0];
const toAddButton = document.getElementById('to-add-page');
const hideButton = document.getElementById('hide-box-btn');

displaySection(box, toAddButton, hideButton);

/*
add people
 */
function onAddSubmit(){
    let formData = readAddFormData();
    addData(formData);    
    let initialFormData = document.getElementById('form-add-people');
    initialFormData.reset();

}

submitBtnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    onAddSubmit();
});

function readAddFormData(){
    let formData = {};
    formData['name'] = document.getElementById('name').value;
    formData['job'] = document.getElementById('job').value;
    formData['date'] = document.getElementById('date').value;
    return formData;

}

function addData(data){

    if(people.length % rows === 0){
        pages++;
    }
    currentPage = pages;
    people.push(data);

    createNewList(people);
       
}


/*
filter people
 */
const filterNameBar = document.getElementById('filter-name-bar');
const filterJobBar = document.getElementById('filter-job-bar');
const filterDateBar = document.getElementById('filter-date-bar');


function filterItems(targetInput){
    targetInput.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        console.log("serchString: " + searchString);
        let filterArr = people.filter((elem) => {
            return elem.name.toLowerCase().includes(searchString) 
            // &&
            //     elem.job.toLowerCase().includes(searchString)&&
            //     elem.date.toLowerCase().includes(searchString);
        });

        peopleList.innerHTML = '';
        createNewList(filterArr);
    });
}

filterItems(filterNameBar);
filterItems(filterJobBar);
filterItems(filterDateBar);


//////////other way

// let nameSearched = document.getElementById('filter-name-bar').value.toLowercase;
// let jobSearched = document.getElementById('filter-job-bar').value.toLowercase;
// let dateSearched = document.getElementById('filter-date-bar').value.toLowercase;


// let searchWords = {name: nameSearched, job: jobSearched, date: dateSearched};

// //creates a listener for when you press a key
// window.onkeyup = keyup;

// function keyup(e) {
//   //setting your input text to the global Javascript Variable for every key press
//   searchWords = e.target.value;
// }



// function filterUsers (searchWords) {
//     let result = [];
//     for (let prop in searchWords) {
//         if (searchWords.hasOwnProperty(prop)) {
//             for (let i = 0; i < searchWords.length; i++) {
//                 if (people[i][prop] === searchWords[prop]) {
//                     result.push(people[i]);
//                 }
//             }
//         }
//     }
//     // peopleList.innerHTML = '';
//     // createNewList(result);
//     console.log("result: "+ result);
//     return result;
// }

// console.log(searchWords + " search words")
// filterUsers(people, searchWords);


/*
TO DO: edit people
*/
const toEditButton = document.getElementById('to-edit-page');

let onePeople = document.getElementsByClassName('people-item');
console.log(onePeople);
for (let i = 0; i < onePeople.length; i++){
    onePeople[i].onclick = function (){
        console.log(onePeople[i])
        console.log(onePeople[i])   
    }
}
// onePeople[0].classList.add('active');
// if(onePeople[0].classList.contains('active')){
//     console.log(onePeople[0]);
//     displaySection(box, toEditButton, hideButton);

// }


/*
jobs list
 */

createJobList(jobs);








