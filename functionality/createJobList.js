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

export { createJobList };