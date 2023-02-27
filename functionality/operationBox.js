/*
operation box
 */

const submitBtnAdd = document.getElementById('add');


function displaySection(container, btnAdd, btnHide){
    btnAdd.addEventListener('click', function () {
        container.style.transform = 'translateX(0)';
    })
    btnHide.addEventListener('click', function () {
        container.style.transform = 'translateX(200%)';
    })
    submitBtnAdd.addEventListener('click', function () {
        container.style.transform = 'translateX(200%)';
    })
}


/*
add people
 */
function onAddSubmit(){
    let formData = readAddFormData();
    addData(formData);    
    let initialFormData = document.getElementById('form-add-people');
    initialFormData.reset();

}

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


export { displaySection, submitBtnAdd, onAddSubmit }