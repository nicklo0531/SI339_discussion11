let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers
// console.log("JS is linked");

// Question 1
document.getElementById('host-name').innerHTML = 'Nick';

//Question 2
let hideInstButton = document.getElementById('instruction_button');
let questionBoxes = document.querySelectorAll('.question');
hideInstButton.addEventListener('click', function(){
    // console.log("button has been clicked");
    for (let questionBox of questionBoxes) {
        if (questionBox.style.display === 'none'){
            questionBox.style.display = 'block';
            hideInstButton.innerHTML = 'Hide Instructions';
        } else {
            questionBox.style.display = 'none';
            hideInstButton.innerHTML = 'Show Instructions';
        }
    }
})

//Question 3
let firstNameTextbox = document.getElementById('first_name');
let lastNameTextbox = document.getElementById('last_name');
firstNameTextbox.addEventListener('input', function(){
    if (firstNameTextbox.value === 'John') {
        console.log('John accessed');
        lastNameTextbox.value = 'Doe';
    }
})

//Question 4
let userNameTextbox = document.getElementById('user_name');
let userNameAlert = document.getElementById('username-alert');
userNameTextbox.addEventListener('input', function(){
    if (pokemonList.includes(userNameTextbox.value)) {
        userNameAlert.innerHTML = 'Username already exists';
    } else {
        userNameAlert.innerHTML = 'Unique username created';
    }
})
// Bulbasaur



//Question 5


//Question 6


//Question 7


//Question 8


//Extra challenge: reset button

