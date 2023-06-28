const navMenu= document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*== HIDDEN MENU ==*/

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*== REMOVE MENU MOBILE ==*/
const navLink = document.querySelectorAll('.nav_link');
/*= closes the nav menu when any of the items in the nav menu are clicked ==*/
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    nav_menu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction)) 

/*============================== ACCORDION SKILLS ====================*/
const skillsContent =document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');
// console.log(skillsContent);
// console.log(skillsHeader);
function toggleSkills(){
    let itemClass = this.parentNode.className
    // console.log(this.parentNode.className);
    // console.log(itemClass)
    // console.log("clicked");
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className='skills_content skills_close';    
    }
    if(itemClass==='skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
    // console.log(clicked');
})

/*========================== PORTFOLIO SWIPER =======================*/
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });
