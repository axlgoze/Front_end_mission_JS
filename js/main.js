const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeinput = pokeName.value.toLowerCase();

    const url =`https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res) => {
        if(res.status != 200){
            console.log(res);
            pokeImage("./assests/sadpokemon.jpg")
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeimg=data.sprites.other.dream_world.front_default;
        console.log(pokeimg);
        pokeImage(pokeimg);

        console.log(data);
        let Name = data.species.name;
        console.log(Name);
        pokeName(Name);

    })
        
}

fetchPokemon();

//funcion que cambia imagen
const pokeImage  = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}



const pokeName = (data) => {
    const pokename = document.getElementById("pokename");
    pokename.innerText = data.species.name;
    pokename.src=url;
    inputfield.value=Name;

}

//get all moves function

