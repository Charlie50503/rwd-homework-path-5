
$(document).ready(() => {
  toggleNav()
});

function toggleNav(){
  const navTitle = document.querySelector('.nav-title');
  const navAddBtn = document.querySelector('.nav-add-btn');
  const navDropdown = document.querySelector('.nav-dropdown');
  if(location.pathname.indexOf('index.html') > -1 ){
    navTitle.textContent='Assignment';
    navAddBtn.style.display = 'none';
  navDropdown.style.display = 'flex';
  }else {
    navTitle.textContent='Admin';
    navAddBtn.style.display = 'flex';
  navDropdown.style.display = 'none';
  }
}