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

function extractProp(array, prop) {
    return array.map(a => a[prop]);
}

function createList(array, containerId) {
    let objLength = Object.keys(array[0]).length;
    let container = document.getElementById(containerId);
    let ulElem = document.createElement('ul');
    ulElem.setAttribute('id', 'ul-' + containerId);
    container.appendChild(ulElem);
    for (let i = 0; i < array.length; i++) {
        let liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        liElem.classList.add('item-' + containerId);
        const internUL = document.createElement('ul');
        liElem.appendChild(internUL);
        for (let j = 0; j < objLength; j++) {
            const internLi = document.createElement('li');
            internUL.appendChild(internLi);
            internLi.classList.add('subitem-' + containerId);
        }
    }
}

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


];

/*
pagination list
 */
const listElement = document.getElementById('list');
const pagination = document.getElementById('pagination');
const peopleListUl = document.getElementById('ul-list');

let currentPage = 1;
let rows = 5;

function displayPeopleList(items, wrapper, rowPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowPerPage * page;
    let end = start + rowPerPage;
    let paginatedItems = items.slice(start, end);
    createList(paginatedItems, 'list');

    const peopleListElem = document.querySelectorAll('.subitem-list');
    let names = extractProp(paginatedItems, 'name');
    let dates = extractProp(paginatedItems, 'date');
    let jobs = extractProp(paginatedItems, 'job');

    for (let i = 0; i < peopleListElem.length; i++) {
        // peopleListElem[i * 3].innerHTML = names[i];
        // peopleListElem[(i * 3) + 1].innerHTML = jobs[i];
        // peopleListElem[(i * 3) + 2].innerHTML = dates[i];
    }

}

displayPeopleList(people, listElement, rows, currentPage);


/*
pagination buttons
*/
function setupPage(items, wrapper, rows) {
    wrapper.innerHTML = "";
    let counter = Math.ceil(items.length / rows);
    for (let i = 1; i < counter + 1; i++) {
        let pageBtn = pageButtons(i, items);
        wrapper.appendChild(pageBtn);
    }
}

function pageButtons(page, items) {
    const button = document.createElement('button');
    button.classList.add('search-button');
    button.classList.add('people-page-button');
    button.innerHTML = page;

    if (currentPage === page) {
        button.classList.add('active');
    }

    button.addEventListener('click', function () {
        currentPage = page;
        displayPeopleList(items, peopleListUl, rows, currentPage);
        let currentActiveBtn = document.querySelector('#pagination button.search-button.active');
        currentActiveBtn.classList.remove('active');
        button.classList.add('active');
    });
    return button;
}

setupPage(people, pagination, rows);

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


function displayJobs() {
    createList(jobs, 'job-list');
    const jobTitleElem = document.querySelectorAll('.subitem-job-list');
    let titles = extractProp(jobs, 'title');
    let status = extractProp(jobs, 'status');

    for (let i = 0; i < jobTitleElem.length; i++) {
        // jobTitleElem[i*2].innerText = titles[i];

        // const intern2UL = document.createElement('ul');
        // jobTitleElem[i*2].appendChild(intern2UL);
        // for (let j = 0; j < Object.keys(jobTitleElem[i*2].length); j++) {
        //     const intern2Li = document.createElement('li');
        //     intern2UL.appendChild(intern2Li);
        //     intern2Li.classList.add('subsubitem');
        // }
    }


}

displayJobs();
