//DOM elements
//capturar todos los datos del documento HTML y guardarlos en una variable
const button = document.getElementById("button");
const input = document.getElementById("input");
const img = document.getElementById("img");

//characteristics
const pokeName = document.getElementById("pokename");
const pokeType = document.getElementById("poke-type");

const pokeWeight = document.getElementById("pokeweight");
const pokeHeight = document.getElementById("pokeheight");

//movements
const pokeMoves = document.getElementById("move-list");

//Stadistics
const pokeHp = document.getElementById("hp");
const pokeAtk = document.getElementById("atk");
const pokeDef = document.getElementById("def");
const pokeSatk = document.getElementById("satk");
const pokeSdef = document.getElementById("sdef");
const pokeSpd = document.getElementById("spd");

//onclik funtcion
button.onclick = () =>{
    let pokeName = input.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if(res.status != 200){
            console.log(res);
            printPokeImage("./assets/images/notFound.png");
            pokeName.innerText = "";

        }else{
            return res.json();
        }
    }).then((data) => {
            printPokeImage(data.sprites.other.dream_world.front_default);
            printPokeFeatures(data);
            printPokeStats(data);
            printPokeMoves(data);
    });
}

//print image
const printPokeImage = (url) => {
    img.src = url;
}

//print Characteristics
const printPokeFeatures = (data) =>{
    pokeName.innerText = data.name.toUpperCase();
    pokeType.innerText = "";

    for(let i = 0; i < data.types.length; i ++) {
        const type = document.createElement("div");
        type.classList.add("pokemon__type");
        pokeType.appendChild(type);

        type.innerText = data.types[i].type.name;
    }

    
    pokeHeight.innerText = data.height;
    pokeWeight.innerText = data.weight;

} 

//print Stadistics
const printPokeStats = (data) => {
    pokeHp.innerText = data.stats[0].base_stat;
    pokeAtk.innerText = data.stats[1].base_stat;
    pokeDef.innerText = data.stats[2].base_stat;
    pokeSatk.innerText = data.stats[3].base_stat;
    pokeSdef.innerText = data.stats[4].base_stat;
    pokeSpd.innerText = data.stats[5].base_stat;
}

//print movement(s)
const printPokeMoves = (data) =>{
    let moves = data.moves;
    pokeMoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        pokeMoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }
}