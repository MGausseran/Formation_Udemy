class Character {
    constructor(name, health, weapon, might) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.might = might;
    }

    getStats(statsSection) {
        const nameParagraph = document.createElement('h2')
            nameParagraph.textContent = this.name;
        const healthParagraph = document.createElement('p');
            healthParagraph.textContent = this.health;
            healthParagraph.style.border = "solid 2px white"
            healthParagraph.style.backgroundColor = '#9c0e0e';
            healthParagraph.style.width = '20vw';
        const weaponImage = document.createElement('img');
            weaponImage.src = `./images/${this.weapon}.png`;
            weaponImage.alt = `${this.weapon}`;
        statsSection.innerHTML = '';
        
        statsSection.appendChild(nameParagraph);
        statsSection.appendChild(healthParagraph);
        statsSection.appendChild(weaponImage);
    }
}


const firstStatsSection = document.querySelector('.first_opponent_column .stats');
const secondStatsSection = document.querySelector('.second_opponent_column .stats');

let Martin = new Character('Martin', 100, 'close_combat', 100);
let Marie = new Character('Marie', 100, 'distance', 100);
Martin.getStats(firstStatsSection);
Marie.getStats(secondStatsSection);