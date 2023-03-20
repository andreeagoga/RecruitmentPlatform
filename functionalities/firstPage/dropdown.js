const dropdownList = document.getElementsByClassName('dropdown-content');
const dropdownMenu = document.getElementById('dropdown-menu');

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

export { hideDropdown, showDropdown };