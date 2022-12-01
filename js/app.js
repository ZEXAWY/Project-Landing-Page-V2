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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// defining a const gloabal variable to contain the main <ul> element.
const navBar = document.getElementById('navbar__list');
// defining a const gloabal variable to hold all the sections elements on the page.
const sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// this helper funtction to help me with the smooth scroll, and reducing the code complexity.
function smoothScrollToView(anchors){
    for(let section of sections){
        anchors.forEach(link => {
            // if the anchor element text is equal to the section data-nav then we going to scroll smoothly.
            if(link.textContent === section.dataset.nav){
                link.addEventListener('click', (evt)=>{
                    evt.preventDefault();
                    section.scrollIntoView({
                        behavior:"smooth",
                    })
                });
            }
        })
    }
}

// this helper function is to highlight the anchor element according to the equal section.
function highlightsMenuBarElements(anchors,section){
    anchors.forEach((anchor) =>{
        if(anchor.textContent === section.dataset.nav){
            anchor.classList.add('active');
        }else{
            anchor.classList.remove('active');
        }
    })
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// To create the navigation menu we going to need elements, wich are <li> elements.
// we need to need to fill those elements with data according to the right section.
// so i am going to iterate over the all section and extract the required data.
// then i am going to implement those data in the newely created <li> elements.innerHTML
function navBuilder(){
    for(const section of sections){
        const sectionID = section.id;
        const sectionData = section.dataset.nav;
        const newUlElement = document.createElement('li');
        // i used innerHTML instead of creating a new anchor element <a> as the project Rubric recommendation.
        newUlElement.innerHTML = `<a href='#${sectionID}' data-element="${sectionData}" class='menu__link'">${sectionData}`;
        
        // Append the created element in the main <ul> element as a child.
        navBar.appendChild(newUlElement);
    }
}

// Add class 'active' to section when near top of viewport

// this function is to recognize the in View section using .getBoundingClientRect() method.
function displayingTheCurrentSection(){
    // i defined this variable so i can use the helper function defined above.
    // this variable contain all the anchors elements <a>.
    const links = navBar.querySelectorAll('a.menu__link')
    for(const section of sections){
        // setting my condition to decicde when the section will be in view ??? 
        if(section.getBoundingClientRect().top<150 && section.getBoundingClientRect().top> -150){
            // Adding the 'your-active-class' if the condition is true.
            section.classList.add('your-active-class');
            // Use the helper function from above to highlight the anchor element with section in view at the same time.
            highlightsMenuBarElements(links, section);
        }else{
            // // removing the 'your-active-class' when the section isn't in view.
            section.classList.remove('your-active-class');
            
        }
    }
}

// Scroll to anchor ID using scrollTO event
function navigateToSection(){
    const links = document.querySelectorAll('a.menu__link');
    smoothScrollToView(links);
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilder();
// Scroll to section on link click
navigateToSection();
// Set sections as active
document.addEventListener('scroll', displayingTheCurrentSection);