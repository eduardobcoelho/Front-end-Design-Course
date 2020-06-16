meusGatos = {
    gato: [
        {
            "id": 1,
            "nome": "Chico",
            "descricao": "O Chico cansou de ser Gato e virou Dinossauro.",
            "fotoURL": "images/gato-01.jpg",
            "linkExterno": "https://www.instagram.com/canseidesergato/"
        },

        {
            "id": 2,
            "nome": "Hamilton",
            "descricao": "Hamilton é o gato mais hipster que você vai ver hoje.",
            "fotoURL": "images/gato-02.jpg",
            "linkExterno": "https://www.instagram.com/hamilton_the_hipster_cat/"
        },

        {
            "id": 3,
            "nome": "Nala",
            "descricao": "Nala é uma gatinha muito simpática e extrovertida.",
            "fotoURL": "images/gato-03.jpg",
            "linkExterno": "https://www.instagram.com/nala_cat/"
        },
    ]
}

var catCard = document.getElementById('card');
var btn = document.getElementById('btn');

//Fazemos um loop para checar se existe um gato com este nome 
function getCat() {

    //Pegamos o valor do Input Field
    var inputCat = document.getElementById('myInput').value;

    for (var i = 0; i < meusGatos.gato.length; i++) {

        if (inputCat == meusGatos.gato[i].nome) {

            console.log("cat founded")

            break;

        } else {

            console.log("We don't find the cat");

        }

    }

}

//Rodamos a Função getGato ao clicar no botao

btn.addEventListener('click', getCat);

