/*
Dropdown user menu
 */
const dropdownButton = document.getElementById('dropdown-button');
const dropdownList = document.getElementsByClassName('dropdown-content');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdown = document.getElementById('dropdown-user-menu');

function showDropdown() {
    dropdownMenu.classList.toggle('show');
}

function hideDropdown(event) {
    let openDropdown;
    if (!event.target.matches('.dropdown-menu')) {
        for (let i = 0; i < dropdownList.length; i++) {
            openDropdown = dropdownList[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

dropdownButton.addEventListener("click", showDropdown);
window.addEventListener("mousedown", hideDropdown);

/*
Carousel
 */
const slides = document.querySelectorAll('.carousel-slide');
const slider = document.getElementById('slider');
const nextSlide = document.querySelector(".carousel-next-button");
const prevSlide = document.querySelector(".carousel-prev-button");
let currentSlide = 0;
let lastSlide = slides.length - 1;

function setTransformProp() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    })
}

slider.addEventListener("blur", setTransformProp);

function changeTransformProp() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    })
}

function goToFirstSlide() {
    if (currentSlide === lastSlide) {
        currentSlide--;
    } else {
        currentSlide++;
    }
    changeTransformProp();
}

nextSlide.addEventListener("click", goToFirstSlide);

function goToPreviousSlide() {
    if (currentSlide === 0) {
        currentSlide++;
    } else {
        currentSlide--;
    }
    changeTransformProp();
}

prevSlide.addEventListener("click", goToPreviousSlide);

/*
create list/ extract props general functions
 */
//
function extractProp(array, prop) {
    return array.map(a => a[prop]);
}
//
// function createList(array, containerId) {
//     let objLength = Object.keys(array[0]).length;
//     let container = document.getElementById(containerId);
//     let ulElem = document.createElement('ul');
//     ulElem.setAttribute('id', 'ul-' + containerId);
//     container.appendChild(ulElem);
//     for (let i = 0; i < array.length; i++) {
//         let liElem = document.createElement('li');
//         ulElem.appendChild(liElem);
//         liElem.classList.add('item-' + containerId);
//         const internUL = document.createElement('ul');
//         liElem.appendChild(internUL);
//         for (let j = 0; j < objLength; j++) {
//             const internLi = document.createElement('li');
//             internUL.appendChild(internLi);
//             internLi.classList.add('subitem-' + containerId);
//
//
//         }
//     }
// }

/*
people list
 */

const people = [
    {
        name: 'Andreea',
        job: 'IT Recruiter',
        date: '29.07.2022'
    },
    {
        name: 'Diana',
        job: 'Frontend Developer',
        date: '28.07.2022'
    },
    {
        name: 'Mihai',
        job: 'Backend Developer',
        date: '30.07.2022'
    },
    {
        name: 'Andrei',
        job: 'IT Recruiter',
        date: '28.07.2022'
    },
    {
        name: 'Marius',
        job: 'Fullstack Developer',
        date: '29.07.2022'
    },
    {
        name: 'Mihaela',
        job: 'IT Recruiter',
        date: '29.07.2022'
    },
    {
        name: 'Antonia',
        job: 'Frontend Developer',
        date: '28.07.2022'
    },
    {
        name: 'Ioana',
        job: 'Backend Developer',
        date: '30.07.2022'
    },
    {
        name: 'Alin',
        job: 'IT Recruiter',
        date: '28.07.2022'
    },
    {
        name: 'Teodora',
        job: 'Fullstack Developer',
        date: '29.07.2022'
    },
    {
        name: 'Maria',
        job: 'IT Recruiter',
        date: '29.07.2022'
    },
    {
        name: 'Mihaela',
        job: 'Frontend Developer',
        date: '28.07.2022'
    },
    {
        name: 'Adrian',
        job: 'Backend Developer',
        date: '30.07.2022'
    },
    {
        name: 'Bogdan',
        job: 'IT Recruiter',
        date: '28.07.2022'
    },
    {
        name: 'Dan',
        job: 'Fullstack Developer',
        date: '29.07.2022'
    },
    {
        name: 'Danut',
        job: 'IT Recruiter',
        date: '29.07.2022'
    },
    {
        name: 'Ioan',
        job: 'Frontend Developer',
        date: '28.07.2022'
    },
    {
        name: 'Catalin',
        job: 'Backend Developer',
        date: '30.07.2022'
    },
    {
        name: 'Calin',
        job: 'IT Recruiter',
        date: '28.07.2022'
    },
    {
        name: 'Ionut',
        job: 'Fullstack Developer',
        date: '29.07.2022'
    },
    {
        name: 'Mihnea',
        job: 'IT Recruiter',
        date: '29.07.2022'
    },
    {
        name: 'Ana',
        job: 'Frontend Developer',
        date: '28.07.2022'
    },
    {
        name: 'Anamaria',
        job: 'Backend Developer',
        date: '30.07.2022'
    },
    {
        name: 'Florin',
        job: 'IT Recruiter',
        date: '28.07.2022'
    },
    {
        name: 'Florina',
        job: 'Fullstack Developer',
        date: '29.07.2022'
    },
    {
        name: 'Marinela',
        job: 'IT Recruiter',
        date: '29.07.2022'
    },
    {
        name: 'Florentina',
        job: 'Frontend Developer',
        date: '28.07.2022'
    },
    {
        name: 'Ionel',
        job: 'Backend Developer',
        date: '30.07.2022'
    },
    {
        name: 'Madalin',
        job: 'IT Recruiter',
        date: '28.07.2022'
    },
    {
        name: 'Madalina',
        job: 'Fullstack Developer',
        date: '29.07.2022'
    },


];

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
    console.log(currentPage);


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
add people
 */
const submitBtnAdd = document.getElementById('add');
function onAddSubmit(){
    let formData = readAddFormData();
    addData(formData);
    // createNewList();
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
console.log("c " + currentPage);
console.log("p " + pages);
function addData(data){
    // if(currentPage  !==  pages){
    console.log(people.length);
    console.log(rows);
    if(people.length % rows === 0){
        pages++;
    }
    currentPage = pages;
    people.push(data);

        console.log("c " + currentPage);
        console.log("p " + pages);
        createNewList(people);
        // const newPeopleContainer = document.createElement('li');
        // peopleList.appendChild(newPeopleContainer);
        // const newPeopleUl = document.createElement('ul');
        // newPeopleContainer.appendChild(newPeopleUl);
        // newPeopleUl.classList.add('people-item');
        // let itemData = `
        // <li>${data.name}</li>
        // <li>${data.job}</li>
        // <li>${data.date}</li>`
        // newPeopleUl.innerHTML = itemData;
    // }

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
        let filterArr = people.filter(elem => {
            return elem.name.toLowerCase().includes(searchString) ||
                elem.job.toLowerCase().includes(searchString) ||
                elem.date.toLowerCase().includes(searchString);
        });
        console.log(filterArr);
        peopleList.innerHTML = '';
        createNewList(filterArr);
    });
}

filterItems(filterJobBar);
filterItems(filterDateBar);
filterItems(filterNameBar);



/*
jobs list
 */
const jobs = [
    {
        title: 'Frontend developer',
        status: {
            newStage: 100,
            interviewStage: 15,
            offerStage: 3,
            hired: 5
        },
    },
    {
        title: 'Backend developer',
        status: {
            newStage: 500,
            interviewStage: 10,
            offerStage: 5,
            hired: 2
        },
    },
    {
        title: 'IT Recruiter',
        status: {
            newStage: 150,
            interviewStage: 7,
            offerStage: 2,
            hired: 1
        },
    },
    {
        title: 'Fullstack developer',
        status: {
            newStage: 200,
            interviewStage: 9,
            offerStage: 2,
            hired: 2
        },
    }
];
const jobsList = document.getElementById('job-list');
const jobItem = document.getElementsByClassName('job-item');
function createJobList(items){
    for(let i = 0; i < items.length; i++){
        const item = document.createElement('li');
        jobsList.appendChild(item);
        const itemList = document.createElement('ul');
        itemList.classList.add('job-item');
        item.appendChild(itemList);
        let list = `
            <li>${items[i].title}</li>
            <li>
                <ul>
                    <li>New Stage <br><p> ${items[i].status.newStage}</p></li>
                    <li>Interview Stage <br><p> ${items[i].status.interviewStage}</li>
                    <li>Offer Stage <br><p> ${items[i].status.offerStage}</li>
                    <li>Hired <br><p> ${items[i].status.hired}</li>
                </ul>
            </li>
         
        `;
        jobItem[i].innerHTML = list;

    }
}

createJobList(jobs);


/*
operation box
 */
// const peopleSection = document.getElementById('people');
// function createBoxOperation(placeToCreate){
//     const box = document.createElement('section');
//     box.setAttribute('id', 'box-'+ peopleSection.id);
//     placeToCreate.appendChild(box);
// }
//
// createBoxOperation(peopleSection);

const box = document.getElementsByClassName('box-people')[0];
const toAddButton = document.getElementById('to-add-page');
const hideButton = document.getElementById('hide-box-btn');

function displaySection(container, btnAdd, btnHide){
    btnAdd.addEventListener('click', function () {
        container.style.transform = 'translateX(0)';
    })
    btnHide.addEventListener('click', function () {
        container.style.transform = 'translateX(200%)';
    })
}

displaySection(box, toAddButton, hideButton);






