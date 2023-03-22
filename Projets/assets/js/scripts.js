// Je selectionne et je stock

// La div switch
let switchBox = document.querySelector('.switch');
// console.log(switchBox);

// La div avec la class btn

let btn = document.querySelector('.btn');
// console.log(btn);

// L'icone dans la div switch

let btnChange = document.querySelector('.switch i');
// console.log(btnChange);

// La navigation

let nav = document.querySelector('.navbar-desktop');
// console.log(nav);

// Les liens dans la barre de navigation

let liens = document.querySelectorAll('.navbar-desktop a');
// console.log(liens);

// Div container-fluid

let container = document.querySelector('.container-fluid');
// console.log(container);

// Le titre h1

let titre = document.querySelector('h1');
//console.log(titre);

switchBox.addEventListener('click', changeMode);
function changeMode(){

    // La div container-fluid
    container.classList.toggle('container-change');
    //on change la couleur de la div 
    switchBox.classList.toggle('switch-change');
    //la nav change
    nav.classList.toggle('nav-dark');
    // on selectionnne les a dans la nav on change de couleur
    for(let a of liens){
        a.classList.toggle('lien-dark');
    }
    //on change l'icone
    if(btnChange.classList.contains('bi-sun-fill')){
        btnChange.classList.remove('bi-sun-fill');
        btnChange.classList.add('bi-moon-fill');
    }else{
        btnChange.classList.add('bi-sun-fill');
        btnChange.classList.remove('bi-moon-fill');
    }

    //je deplace le bouton
    btn.classList.toggle('btn-change');

    // je deplace l'icone
    btnChange.classList.toggle('icone-change');

    // titre de la page
    titre.classList.toggle('title-dark')

    smile.classList.toggle('smiledark')
    abonner.classList.toggle('validark')

}

                // ----------------------- Affichage du menu burger ---------------------------------

let burger = document.querySelector('.navbar-mobile > i');
let menu = document.querySelector('.navbar-menu-mobile');
console.log(burger);

burger.addEventListener('click', ()=>{
    menu.classList.toggle('menu-affiche');
    burger.classList.toggle('bi-x-lg')
});



let smile = document.querySelector('.container .bloc-btn>i')
console.log(smile);

smile.addEventListener('click', changeSmile)

function changeSmile() {
    
    if(smile.classList.contains('bi-emoji-neutral')){
        smile.classList.remove('bi-emoji-neutral');
        smile.classList.add('bi-emoji-wink-fill');
    }else{
        smile.classList.add('bi-emoji-neutral');
        smile.classList.remove('bi-emoji-wink-fill');
    }
}

let abonner = document.querySelector('.btn-abonner')
console.log(smile);

abonner.addEventListener('click', changeValide)

function changeValide() {
    if (abonner.classList.contains('btn-abonner')) {
        abonner.classList.remove('btn-abonner')
        abonner.classList.add('valid')
        abonner.innerHTML = 'Abonné'+'<i class="bi bi-check"></i>'
    } else {
        abonner.classList.remove('valid')
        abonner.classList.add('btn-abonner')
        abonner.innerHTML = 'Abonnez-vous' 
    }

}