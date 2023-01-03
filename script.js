const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

const docIds = ['nav', 'image1', 'image2', 'image3'];
const docName = ['nav', 'image1', 'image2', 'image3'];

// create elemnts function
function createElements(valName, docId) {
        valName = document.getElementById(docId);
        
}
// loop for each elment and then create it
for(let id = 0; id < docIds.length; id++) {
    createElements(docName[id], docIds[id]);
}

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%' : 'rgb(255 255 255 / 50%';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%' : 'rgb(0 0 0 / 50%';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');    ;
    isDark ? imageMode('dark') : imageMode('light');
}

// Dark Mode Styles
function darkMode() {
    toggleDarkLightMode(true);
}

// Light Mode Styles
function lightMode() {
    toggleDarkLightMode(false);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listiner 
toggleSwitch.addEventListener('change', switchTheme);

// Check Loacl Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}

