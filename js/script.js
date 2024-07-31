let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}
let newbtn=document.querySelector('#user-btn');
let profile=document.querySelector(".profile-corner");
newbtn.onclick=()=>{
   profile.classList.toggle("activec");
}
let searchform=document.querySelector(".search-form-head");
document.querySelector('#search-btn').onclick=()=>{
   searchform.classList.toggle("active");
}
let sideSection=document.querySelector(".side-bar");
document.querySelector('#menu-btn').onclick=()=>{
   sideSection.classList.add("hide");
}
document.querySelector('#close-btn').onclick=()=>{
   sideSection.classList.remove("hide");
}

