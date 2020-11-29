"use strict";

$(document).ready(function () {
  toggleNav();
});

function toggleNav() {
  var navTitle = document.querySelector('.nav-title');
  var navAddBtn = document.querySelector('.nav-add-btn');
  var navDropdown = document.querySelector('.nav-dropdown');

  if (location.pathname.indexOf('index.html') > -1) {
    navTitle.textContent = 'Assignment';
    navAddBtn.style.display = 'none';
    navDropdown.style.display = 'flex';
  } else {
    navTitle.textContent = 'Admin';
    navAddBtn.style.display = 'flex';
    navDropdown.style.display = 'none';
  }
}
//# sourceMappingURL=all.js.map
