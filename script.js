let btn = document.getElementById("getdata");
btn.addEventListener('click', function () {
    let pokename = document.getElementById('pokename').value
    pokename = pokename.toLowerCase();
    if (pokename == "") {
        pokename = "blastoise";
    }



    fetch('https://pokeapi.co/api/v2/pokemon/' + pokename)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)

            let name_a = document.getElementById("name_a");
            name_a.innerHTML = data["name"];
            /*let foto1 = document.getElementById("foto1")
            foto1.innerHTML = "Имя: " + data["species"]["name"]*/

            /* let foto2 = document.getElementById("foto2")
             foto2.innerHTML = "Имя: " + data["species"]["name"]
 
             let name1 = document.getElementById("name1")
             name1.innerHTML = "Имя: " + data["species"]["name"]
 
             let name = document.getElementById("name_a")
             name.innerHTML = "Имя: " + data["species"]["name"]*/



            let sprite = document.getElementById("foto1");
            sprite.innerHTML = '<img src="' + data["sprites"]["front_default"] + '"></img';

            let sprite_back = document.getElementById("foto2");
            sprite_back.innerHTML = '<img src="' + data["sprites"]["back_default"] + '"></img';

            let sprite_big = document.getElementById("name1");
            sprite_big.innerHTML = '<img src="' + data["sprites"]["other"]["dream_world"]["front_default"] + '"></img';


        })


})






/*
class Pokemon{

    constructor(name, hp, image_face, image_back){

        this.name=name;
        this.hp=hp; 
        this.image_face=image_face;
        this.image_back=image_back;
    }
} 
*/