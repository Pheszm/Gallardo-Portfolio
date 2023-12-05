///HIGHTLIGHTER AND SCROLL FUNCTION NAVIGATOR
var buttons = document.querySelectorAll('.HomeB, .AboutB, .ResumeB, .SkillB, .AwardB, .ContactB');
window.addEventListener('scroll', updateHighlighting);

updateHighlighting();

function scrollToPosition(button) {
    var k = parseInt(button.getAttribute('data-scroll'));
    var y = k * (window.innerWidth / 100);
    document.body.scrollTop = y;
    document.documentElement.scrollTop = y; 
}
function updateHighlighting() {
    var currentScroll = window.scrollY || window.pageYOffset;
    
    buttons.forEach(function(btn) {
        var k = parseInt(btn.getAttribute('data-scroll'));
        var y = k * (window.innerWidth / 100);
        var offset = 21 * (window.innerWidth / 100); 
        if (currentScroll >= y - offset && currentScroll <= y + offset) {
            btn.classList.add('highlight');
        } else {
            btn.classList.remove('highlight');
        } 
    });  
}

///HEADER NAVIGATION VISIBILITY
const NavigationBar = document.getElementById('Header');

function HeaderGoesVisible() {
  if (window.scrollY >= 30 * (window.innerWidth / 100)) {
    NavigationBar.classList.add('visible');
  } else {
    NavigationBar.classList.remove('visible');
  }
}

window.addEventListener('load', HeaderGoesVisible);
window.addEventListener('scroll', HeaderGoesVisible);



///BACK TO TOP FUNCTION
const backToTopButton = document.getElementById('back-to-top');
            
function updateBackToTopButtonVisibility() {
    if (window.scrollY >= 160 * (window.innerWidth / 100)) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

window.addEventListener('load', updateBackToTopButtonVisibility);
window.addEventListener('scroll', updateBackToTopButtonVisibility);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




///ABOUT VISIBLE
const AboutSecc = document.getElementById('About');

function AboutGoesVisible() {
  const scrollThreshold = 30 * (window.innerWidth / 100);
  
  if (window.scrollY >= scrollThreshold) {
    AboutSecc.style.opacity = '1';
  } else {
    AboutSecc.style.opacity = '0';
  }
}

window.addEventListener('load', AboutGoesVisible);
window.addEventListener('scroll', AboutGoesVisible);



///RESUME VISIBLE
const ResumeSection = document.getElementById('ResumeSection');
const scrollThreshold = 65 * (window.innerWidth / 100); // Adjust the scroll threshold as needed

function ResumeSectionVisibility() {
  if (window.scrollY >= scrollThreshold) {
    ResumeSection.style.opacity = '1';
  } else {
    ResumeSection.style.opacity = '0';
  }
}

window.addEventListener('load', ResumeSectionVisibility);
window.addEventListener('scroll', ResumeSectionVisibility);


///AWARDS VISIBLE
const AwardsSection = document.getElementById('AwardsSection');
const AwardsscrollThreshold = 105 * (window.innerWidth / 100); // Adjust the scroll threshold as needed

function AwardsSectionVisibility() {
  if (window.scrollY >= AwardsscrollThreshold) {
    AwardsSection.style.opacity = '1';
  } else {
    AwardsSection.style.opacity = '0';
  }
}

window.addEventListener('load', AwardsSectionVisibility);
window.addEventListener('scroll', AwardsSectionVisibility);


///CONTACT VISIBLE
const contactSection = document.getElementById('ContactSection');
const ContactscrollThreshold = 145 * (window.innerWidth / 100); // Adjust the scroll threshold as needed

function handleContactSectionVisibility() {
  if (window.scrollY >= ContactscrollThreshold) {
    contactSection.classList.add('show');
  } else {
    contactSection.classList.remove('show');
  }
}

window.addEventListener('load', handleContactSectionVisibility);
window.addEventListener('scroll', handleContactSectionVisibility);





///ALTERNATE TITLE SHOWING
const title1 = document.querySelector('.Title1');
const title2 = document.querySelector('.Title2');

function toggleTitles() {
  setInterval(() => {
    title1.style.opacity = (title1.style.opacity === '0' || title1.style.opacity === '') ? '1' : '0';
    title2.style.opacity = (title2.style.opacity === '0' || title2.style.opacity === '') ? '1' : '0';
  }, 1000); // 5 seconds interval (5000 milliseconds)
}

toggleTitles();


