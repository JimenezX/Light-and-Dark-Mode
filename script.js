const toggleSwitch = document.querySelector('input[type="checkbox"]');
const lightModeText = document.getElementById('light-text')
const sunLogo = document.getElementById('sunlogo')
const moonLogo = document.getElementById('moonlogo')
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')


function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    image1.src = 'img/undraw_proud_coder_dark.svg'
    image2.src = 'img/undraw_feeling_proud_dark.svg'
    image3.src = 'img/undraw_conceptual_idea_dark.svg'
    lightModeText.textContent = "Dark Mode";
        sunLogo.classList.toggle("hidden");
        moonLogo.classList.toggle("hidden"); 

}


function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    image1.src = 'img/undraw_proud_coder_light.svg'
    image2.src = 'img/undraw_feeling_proud_light.svg'
    image3.src = 'img/undraw_conceptual_idea_light.svg'
    lightModeText.textContent = "Light Mode";
         sunLogo.classList.toggle("hidden");
         moonLogo.classList.toggle("hidden"); 
        

}


// Switch theme function
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data_theme', 'dark')
        localStorage.setItem('theme', 'dark');
        darkMode();
       
    }else{
         document.documentElement.setAttribute('data_theme', 'light')
         localStorage.setItem('theme', 'light');
         lightMode();
    }
}






// Event listener
toggleSwitch.addEventListener('change', switchTheme);


//Localstorage
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data_theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}