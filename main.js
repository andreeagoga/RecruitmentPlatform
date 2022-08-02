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


// function extractProp(array, prop) {
//     return array.map(a => a[prop]);
// }

//         // names.forEach(n => {
//         //     const internalLi = document.createElement('li');
//         //     internalUL.appendChild(internalLi);
//         //     internalLi.appendChild(n);
//         // });


/*
pagination list
 */

const listElement = document.getElementById('list');
const pagination = document.getElementById('pagination');
const peopleListUl = document.createElement('ul');
listElement.appendChild(peopleListUl);

let currentPage = 1;
let rows = 5;

function displayList(items, wrapper, rowPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowPerPage * page;
    let end = start + rowPerPage;
    let paginatedItems = items.slice(start, end);


    for (let i = 0; i < end; i++) {
        let item = paginatedItems[i];
        const peopleListLi = document.createElement('li');
        peopleListLi.classList.add('item');
        const internalUL = document.createElement('ul');
        peopleListLi.appendChild(internalUL);

        // for(const key in item){
        //     console.log(item[key]);
        //     const internalLi = document.createElement('li');
        //     internalUL.appendChild(internalLi);
        //     let value = document.createTextNode(item[key]);
        //     internalLi.appendChild(value);
        // }
        //
        for (let j = 0; j < Object.keys(item).length; j++) {
            const internalLi = document.createElement('li');
            internalLi.setAttribute('class', ('item' + j).toString());
            internalUL.appendChild(internalLi);

            let names = document.createTextNode(item.name);
            let jobs = document.createTextNode(item.job);
            let dates = document.createTextNode(item.date);

            internalLi.appendChild(names);
            internalLi.appendChild(jobs);
            internalLi.appendChild(dates);

            wrapper.appendChild(peopleListLi);
        }
    }
}

displayList(people, peopleListUl, rows, currentPage);

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
    button.innerHTML = page;

    if (currentPage === page) {
        button.classList.add('active');
    }

    button.addEventListener('click', function () {
        currentPage = page;
        displayList(items, peopleListUl, rows, currentPage);
        let currentActiveBtn = document.querySelector('#pagination button.active');
        currentActiveBtn.classList.remove('active');
        button.classList.add('active');
    });
    return button;
}


setupPage(people, pagination, rows);
