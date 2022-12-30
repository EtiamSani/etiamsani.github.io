/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')

    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')
// const bod=document.querySelector('body')
// const logoo = document.querySelectorAll('.skills__name, .skills__icon')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
    // if (bod.contains("active")) {
    //     for (i = 0; i < logoo.length; i++) {
    //         logoo[i].classList.toggle('active')
    //      }

    // }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')


     tabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab => {
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
    })





/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const toggle = document.querySelector(".toggle-item"),
      body=document.querySelector('body'),
      header = document.querySelector('header');
      const z = document.querySelector('#change-icon1');
      const h = document.querySelector('#change-icon2');
      const title = document.querySelectorAll('.section__title')
      const logo = document.querySelectorAll('.skills__name')
      const icon = document.querySelectorAll(".skills__icon")
      const nav = document.querySelector(".nav__logo")
      const menu = document.querySelector(".nav__toggle")
      const softskillsIcon = document.querySelectorAll('.softskills__icon')
      const sectionSubtitles = document.querySelectorAll('.section__subtitle')
      const softskillsName = document.querySelectorAll('.softskills__name')
      const softskillsDescription = document.querySelectorAll('.softskills__description')
      const qualification = document.querySelectorAll('.qualification__button, .qualification__icon, .qualification__subtitle, .qualification__rounder , .qualification__line ')
      const portfolio = document.querySelectorAll('.portfolio__title, .swiper-portfolio-icon')
      const contact = document.querySelectorAll('.contact__icon, .contact__title')
      const navLinks = document.querySelectorAll('.nav__link')
      



      toggle.addEventListener("click", function(){
        this.classList.toggle("active");
        body.classList.toggle("active");
        header.classList.toggle("active");
        z.classList.toggle("moon");
        h.classList.toggle("sun");
        
        nav.classList.toggle("active")
        menu.classList.toggle("active")

        for (i = 0; i < title.length; i++) {
           title[i].classList.toggle('active');
        }

        for (i = 0; i < logo.length; i++) {
            
            logo[i].classList.toggle('active')
        
         }

         for (i = 0; i < icon.length; i++) {
            
            icon[i].classList.toggle("active")
            
         }

         for (i = 0; i < softskillsIcon.length; i++) {
            
            softskillsIcon[i].classList.toggle("active")
            
         }

         
         for (i = 0; i < sectionSubtitles.length; i++) {
            
            sectionSubtitles[i].classList.toggle("active")
            
         }

         
         for (i = 0; i < softskillsName.length; i++) {
            
            softskillsName[i].classList.toggle("active")
            
         }

         for (i = 0; i < softskillsDescription.length; i++) {
            
            softskillsDescription[i].classList.toggle("active")
            
         }

         for (i = 0; i < qualification.length; i++) {
            
            qualification[i].classList.toggle("active")
            
         }

         for (i = 0; i < portfolio.length; i++) {
            
            portfolio[i].classList.toggle("active")
            
         }

         for (i = 0; i < contact.length; i++) {
            
           contact[i].classList.toggle("active")
            
         }

         for (i = 0; i < navLinks.length; i++) {
            
            navLinks[i].classList.toggle("active")
             
          }
 





        

        // function to change content from light -- dark

        // if(toggle.classList.contains("active")){
        //     content.innerHTML="Dark Mode";
        // }else{
        //     content.innerHTML="Light Mode";
        // }
      });