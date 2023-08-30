document.addEventListener("DOMContentLoaded", function(event) {
  const mobile_nav = document.querySelector(".navbar-mobile-btn");
const nav_header= document.querySelector(".header");
 


 mobile_nav.addEventListener("click" , function toggleNavbar(){
    nav_header.classList.toggle("active");
 });

 const toggleSwitchCheckbox = document.getElementById('toggle2');
 const toggleSwitchText = document.querySelector('.toggle-switch-text');

 
 toggleSwitchText.innerText = 'Yearly(free-trial)';
 toggleSwitchText.classList.add('off');

 toggleSwitchCheckbox.addEventListener("click", (event) => {
   if (event.target.checked) {
     toggleSwitchText.innerText = 'Monthly';
     toggleSwitchText.classList.remove('off');
     toggleSwitchText.classList.add('on');
   } else {
     toggleSwitchText.innerText = 'Yearly(free-trial)';
     toggleSwitchText.classList.remove('on');
     toggleSwitchText.classList.add('off');
   }

 });

 
 const Monthly=document.querySelector(".main-section-3");
 const Yearly = document.querySelector(".main-section-2");
Monthly.classList.add('dis');
 toggleSwitchCheckbox.addEventListener('click', (event) => {
  if (event.target.checked){
    Monthly.classList.remove('dis');
    Monthly.classList.add('main-sections');
    Yearly.classList.remove('main-sections');
    Yearly.classList.add('dis');
    
    
  }
  else{
    
    Yearly.classList.remove('dis'); 
    Yearly.classList.add('main-sections');
    Monthly.classList.remove('main-sections');
    Monthly.classList.add('dis');
   

    
  }
 });
});

const accordion=document.getElementsByClassName('content-container');
for(i=0;i<accordion.length;i++){
  accordion[i].addEventListener('click' , function(){
    this.classList.toggle('active');
  })
}
