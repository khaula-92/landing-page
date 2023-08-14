/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Start Global Variables
const navBar = document.querySelector('.navigation-menu')
const navList = document.querySelector('#item-list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.header');
// End Global Variables


// Start building navigation
function buildNav(){
    sections.forEach(section => {
        //Create the  elements (li) inside the ul
        const navBtn = document.createElement('li');
        //Insert items to  the li
        navBtn.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="link">${section.dataset.nav}</a>`);
        //Append the li to the ul
        navList.appendChild(navBtn);

        //scrollBehavior Function Invoke
        scrollBehavior(navBtn, section);
    });
    //Append the ul to the nav
    navBar.appendChild(navList);
}

//Build Nav Function Invoke
buildNav();



// activate the Icons to work with JS (menu-bar & search icon)
let menuBr=document.querySelector('#menu-bars');
let menuItems=document.querySelector('.navigation-menu');

menuBr.onclick = () =>{
    menuBr.classList.toggle('fa-times');
    menuItems.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

let searchIcon=document.querySelector('#search-icon');
let searchForm=document.querySelector('.search-form');

searchIcon.onclick = () =>{
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBr.classList.remove('fa-times');
    menuItems.classList.remove('active');
}

window.onscroll = () =>{
    menuBr.classList.remove('fa-times');
    menuItems.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

//End build the nav


// Add class 'active' to section when near top of viewport
function activeSection (){
    // Select all anchor using "link" class
    const activeNav = document.querySelectorAll(".link")
    sections.forEach((section, i)=>{
        //Get (.getBoundingClientRect) for section 
        const secBond = section.getBoundingClientRect();
        //Check if the section viewport or not 
        if (secBond.top <= 380 && secBond.bottom >= 350){
            //add 'activeClass' class to the specific section
            section.classList.add("activeClass");
            //add 'activeBtn' class to the specific nav button according to section ID
            activeNav[i].classList.add("activeBtn");
        } else{
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("activeClass");
            activeNav[i].classList.remove("activeBtn");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport


// Scroll to anchor ID using scrollTO event
function scrollBehavior(navBtn, section){
    navBtn.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// End scrollTO event



// Start  the NavBar Toggle  when User Scroll Activity
// function toggleNavBar(){
//     let ScrollByUser;
//     //Default Settings for NavBar while scrolling
//     header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
//     //scrolling Cleartimeout  
//     window.clearTimeout( ScrollByUser );
//     //The running Timeout after end scrolling
//     ScrollByUser = setTimeout(function() {
//         //The Timeout Settings Execute  after  finished
//         header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
//     }, 6000);
// }
// End  the NavBar Toggle  when User Scroll Activity

// execute the Scroll Event to  the functions of toggleNavBar  and activeSection 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End  execute the Scroll Event to  the functions of toggleNavBar  and activeSection 
//solve sticky navbar issue..
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navigation-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Create the div element for  (go up)  button 
const goUp= footer.insertAdjacentHTML("beforebegin", `<div Id="returnTop" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("returnTop").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
//End  (go up)  button
