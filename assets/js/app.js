let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeName = document.getElementById("name");

let type = document.getElementById("type");

let hp = document.getElementById("hp");
let def = document.getElementById("def");
let atk = document.getElementById("atk");
let spd = document.getElementById("spd");
let exp = document.getElementById("exp");


const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    let response = await data.json();
    //console.log(response);

    image.src = response.sprites.front_default;

    let name = response.name;
    pokeName.textContent = name.toUpperCase();

    let typ = response.types[0].type.name;
    type.textContent = typ.toUpperCase();

    let hplvl = response.stats[0].base_stat;
    hp.textContent = hplvl + "/ 300";
    hp.style.width = hplvl;

    let deflvl = response.stats[1].base_stat;
    def.textContent = deflvl + "/ 300"
    def.style.width = deflvl;

    let atklvl = response.stats[2].base_stat;
    atk.textContent = atklvl + "/ 300"
    atk.style.width = atklvl;

    let spdlvl = response.stats[5].base_stat;
    spd.textContent = spdlvl + "/ 300"
    spd.style.width = spdlvl;

    let explvl = response.base_experience;
    exp.textContent = explvl + "/ 1000"
    exp.style.width = explvl / 3.45;
};

changePokemon();
button.addEventListener("click", changePokemon);