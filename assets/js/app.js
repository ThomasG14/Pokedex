let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

let type = document.getElementById("type");

let hp = document.getElementById("hp");
let def = document.getElementById("def");
let atk = document.getElementById("atk");
let spd = document.getElementById("spd");
let exp = document.getElementById("exp");


const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeName.textContent = response.name;

    type.textContent = response.types[0].type.name;

    hp.textContent = response.stats[0].base_stat;
    def.textContent = response.stats[1].base_stat;
    atk.textContent = response.stats[2].base_stat;
    spd.textContent = response.stats[5].base_stat;
    exp.textContent = response.base_experience;
};

changePokemon();
button.addEventListener("click", changePokemon);