const dropdown = document.getElementById('drop-down-nav');
const activeDropButtons = document.getElementsByClassName('active-drop-down-btn');
for (let i=0; i<activeDropButtons.length; i++) {
    activeDropButtons[i].addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });
}


// var userDropDown = document.getElementsByClassName('user-drop-down')[0];
// var userDropdownStatus = window.getComputedStyle(userDropDown).display;
// function toggleUserDropDown() {
//     if (userDropdownStatus === 'none') {
//         userDropDown.style.display = 'flex';
//         userDropdownStatus = userDropDown.style.display;
//     }
//     else if (userDropdownStatus === 'flex') {
//         userDropDown.style.display = 'none';
//         userDropdownStatus = userDropDown.style.display;
//     }
// }

const userDropDown = document.getElementsByClassName('user-drop-down')[0];
const activeUserButtons = document.getElementsByClassName('active-user-btn');
for (let i=0; i<activeUserButtons.length; i++) {
    activeUserButtons[i].addEventListener('click', function() {
        userDropDown.classList.toggle('active');
    });
}


// Side bars ----------------------
// Search sidebar
const searchSidebar = document.getElementById('m-search-sidebar');
const activeSearchSidebarButtons = document.getElementsByClassName('active-search-sidebar');
for (let i=0; i<activeSearchSidebarButtons.length; i++) {
    activeSearchSidebarButtons[i].addEventListener('click', function() {
        searchSidebar.classList.toggle('active');
        console.log("Hey");
    });
}