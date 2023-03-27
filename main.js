import { hideDropdown, showDropdown } from "./functionalities/firstPage/dropdown.js";

import { goToFirstSlide, goToPreviousSlide } from "./functionalities/firstPage/carousel.js";

import { people as peopleList, STATUS } from "./functionalities/peoplePage/people.js";

import { jobs as jobsList } from "./functionalities/jobsPage/jobs.js";

import { displaySection, onAddSubmit, checkCheckbox, checkboxes } from "./functionalities/peoplePage/operationBox.js";

import { createJobList } from "./functionalities/jobsPage/createJobList.js";

import { createNewList } from "./functionalities/peoplePage/createPeopleList.js";

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
Create people list
 */
let currentPage = 1;
let rows = 5;
// let people = [];
let pages = 0;
function fetchPeople() {
     
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(peopleList)}, 100);
    });
};
function fetchJobs() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {resolve(jobsList)}, 100);
        });
    
};
const peopleData = [];
const jobsData = [];

// Promise.all([
//     fetchPeople(), fetchJobs()
// ]).then(([people, jobs] ) => {
//     people.forEach(person => {
//         const job = jobs.find(job => job.id === person.jobId);
//         data.push({...person, jobTitle:job.title});
//     });
//     pages = Math.ceil(people.length / rows);
//     createNewList(data, currentPage, rows, pages);
//     createJobList(jobs);
    
// })

const [people, jobs] = await Promise.all([
    fetchPeople(), fetchJobs()
]);
people.forEach(person => {
    const job = jobs.find(job => job.id === person.jobId);
    peopleData.push({...person, jobTitle:job.title});
});
pages = Math.ceil(people.length / rows);
createNewList(peopleData, currentPage, rows, pages);
jobs.forEach((job) => {
    const peopleOnJob = people.filter(person => person.jobId === job.id);
    const peopleGroupedByStatus = Object.values(STATUS).reduce((res, val) => {
        res[val] = [];
        return res;
    }, {});
    peopleOnJob.forEach(person => {
        peopleGroupedByStatus[person.status].push(person);
    });
    jobsData.push({...job, ...peopleGroupedByStatus});
});
createJobList(jobsData);
// fetchPeople().then((response) => {
//     people = response
//     pages = Math.ceil(people.length / rows);
//     createNewList(people, currentPage, rows, pages);
// }).then();

/*
Create jobs list
 */
// createJobList(jobs);


/*
operation box
 */
const box = document.getElementsByClassName('box-people')[0];
const toAddButton = document.getElementById('to-add-page');
const toEditButton = document.getElementById('to-edit-page');
const hideButton = document.getElementById('hide-box-btn');
const submitBtnAdd = document.getElementById('add');
const submitBtnEdit = document.getElementById('add');

displaySection(box, toAddButton, hideButton, submitBtnAdd);
displaySection(box, toEditButton, hideButton, submitBtnAdd);

setTimeout(checkCheckbox, 1000);
// console.log("checkC %o", checkboxes);
// console.log(JSON.stringify(checkboxes) + "here");
// console.log(checkboxes.length);

/*
add people
 */
submitBtnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    onAddSubmit(currentPage, rows, pages);
});


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
// const toEditButton = document.getElementById('to-edit-page');

// let onePeople = document.getElementsByClassName('people-item');
// console.log(onePeople);
// for (let i = 0; i < onePeople.length; i++){
//     onePeople[i].onclick = function (){
//         console.log(onePeople[i])
//         console.log(onePeople[i])   
//     }
// }
// onePeople[0].classList.add('active');
// if(onePeople[0].classList.contains('active')){
//     console.log(onePeople[0]);
//     displaySection(box, toEditButton, hideButton);

// }









