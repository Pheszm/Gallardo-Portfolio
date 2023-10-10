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