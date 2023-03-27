// let currentPage = 1;
// let rows = 5;
let lessPages = 2;
// let pages = Math.ceil(people.length / rows);


const peopleList = document.getElementById('list');
const peopleItem = document.getElementsByClassName('people-item');
const pagination = document.getElementById('pagination');

function pageSetup(array, page, rows, pages){
    let start = rows * (page-1);
    let end = start + rows;
    let paginatedItems = Array.from(array).slice(start, end);
    return {
        paginatedItems, pages
    };
}

function createNewList(array, currentPage, rows, pages){
    peopleList.innerHTML='';
    let data = pageSetup(array, currentPage, rows, pages);
    let items = data.paginatedItems;

    for(let i = 0; i < items.length; i++){
        const item = document.createElement('li');
        peopleList.appendChild(item);
        const itemList = document.createElement('ul');
        itemList.classList.add('people-item');
        item.appendChild(itemList);
        let list = `
            <li>${items[i].name}</li>
            <li>${items[i].jobTitle}</li>
            <li>${items[i].date}</li>
            <li><input type="checkbox" class="person-checked" ></li>
        `;
        peopleItem[i].innerHTML = list;

    }
    createButtons(array, currentPage, pages, rows);
}

function createButtons(data, currentPage, pages, rows) {
    pagination.innerHTML = '';
    let activePage;
    let maxLeft = currentPage - Math.floor(lessPages / 2);
    let maxRight = currentPage + Math.floor(lessPages / 2);

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
        if(currentPage === i){
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

            createNewList(data, currentPage, rows, pages);
        })
    })

    const leftButton = document.getElementsByClassName('left-pagination')[0];
    if(leftButton){
        leftButton.addEventListener('click', function() {
            currentPage--;
            createNewList(data, currentPage, rows, pages);
        });
    }

    const rightButton = document.getElementsByClassName('right-pagination')[0];
    if(rightButton) {
        rightButton.addEventListener('click', function () {
            currentPage++;
            createNewList(data, currentPage, rows, pages)
        });
    }

}

export { createNewList };