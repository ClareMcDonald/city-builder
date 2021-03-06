import { createCountString } from './utils.js';

// import functions and grab DOM elements
const waterfrontDropdown = document.getElementById('waterfront-dropdown');
const waterfrontImage = document.getElementById('waterfront-img');
const skylineDropdown = document.getElementById('skyline-dropdown');
const skylineImage = document.getElementById('skyline-img');
const castleDropdown = document.getElementById('castle-dropdown');
const castleImage = document.getElementById('castle-img');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganEl = document.getElementById('slogan-display');
const countEl = document.getElementById('count');


// let state
let waterfrontCount = 0;
let skylineCount = 0;
let castleCount = 0;

let slogans = [];

// set event listeners
waterfrontDropdown.addEventListener('change', () => {
    const id = waterfrontDropdown.value;

    waterfrontImage.src = `./assets/waterfront-${id}.png`;

    waterfrontCount++;

    displayStats();
});

skylineDropdown.addEventListener('change', () => {
    const id = skylineDropdown.value;

    skylineImage.src = `./assets/skyline-${id}.png`;

    skylineCount++;

    displayStats();
});

castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;

    castleImage.src = `./assets/castle-${id}.png`;
    
    castleCount++;

    displayStats();
});

sloganButton.addEventListener('click', () => {
    let sloganVal = sloganInput.value;
  
    slogans.push(sloganVal);
  
    displaySlogans();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displaySlogans() {
    sloganEl.textContent = '';
  
    for (let slogan of slogans) {
        let p = document.createElement('p');

        p.classList.add('slogan-style');

        p.textContent = slogan;
    
        sloganEl.append(p);
    }

    sloganInput.value = '';
}

function displayStats() {
    countEl.textContent = createCountString(waterfrontCount, skylineCount, castleCount);
}