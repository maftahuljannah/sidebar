let menubtn = document.querySelector('.toggleBtn')
let sidebar = document.querySelector('.sidebar')
let cancelbtn = document.querySelector('.cancelbtn')



menubtn.addEventListener('click', ()=>{
    sidebar.classList.add('active');
});

const closeSidebar = () => {
    sidebar.classList.remove('active');
};


cancelbtn.addEventListener("click", closeSidebar);
sidebar.addEventListener("click", closeSidebar)

