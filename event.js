
var dropdown = document.getElementById('drop-down-nav');
var dropdownStatus = window.getComputedStyle(dropdown).display;

function toggleDropDown () {
    if (dropdownStatus === 'none') {
        dropdown.style.display = 'flex';
        dropdownStatus = dropdown.style.display;
    }
    else if (dropdownStatus === 'flex') {
        dropdown.style.display = 'none';
        dropdownStatus = dropdown.style.display;
    }
}

var userDropDown = document.getElementsByClassName('user-drop-down')[0];
var userDropdownStatus = window.getComputedStyle(userDropDown).display;
function toggleUserDropDown() {
    if (userDropdownStatus === 'none') {
        userDropDown.style.display = 'flex';
        userDropdownStatus = userDropDown.style.display;
    }
    else if (userDropdownStatus === 'flex') {
        userDropDown.style.display = 'none';
        userDropdownStatus = userDropDown.style.display;
    }
}

// Side bars ----------------------
// Search sidebar
var searchSidebar = document.getElementById('m-search-sidebar');
var searchSidebarStatus = window.getComputedStyle(searchSidebar).display;
function toggleSearchSidebar() {
    if (searchSidebarStatus === 'none') {
        searchSidebar.style.display = 'flex';
        searchSidebarStatus = searchSidebar.style.display;
    }
    else if (searchSidebarStatus === 'flex') {
        searchSidebar.style.display = 'none';
        searchSidebarStatus = searchSidebar.style.display;
    }
}