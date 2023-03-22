/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : lasouris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche duclavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>,   <select> et <textearea> (changer la couleur ou la taille par exemple)
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------
    Pour attacher un évènement à un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction


*/

// 1,/p #p1

// document.getElementById('p1').addEventListener('click', fp1)

function fp1() {
    alert(`l'evenement est cliqué`)
}

//on place la fonction JS qu'on veut executer a l'interieur de la balise ouvrante p

// 2 div #rouge

let divRouge = document.querySelector('#rouge')
//je selectionne ma div par son id ensuite je lui ajoute un ecouteur d'evenement
divRouge.addEventListener('click', fDivRouge);
//l'ecouteur d'evenement se decompose en deux arguments:
//1- l'action ici: click
//2- le nom de la fonction ici fDivRouge
function fDivRouge() {
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.style.backgroundColor = "gold";
    divRouge.innerHTML = "gold";


}

// 3 div #orange
// avec une fonction anonyme

let divOrange = document.querySelector("#orange")
//je selectionne ma div par son id
divOrange.addEventListener("dblclick", function () {
    divOrange.style.backgroundColor = "gold";
    divOrange.style.borderRadius = "50%";
    divOrange.style.backgroundColor = "gold";
    divOrange.innerHTML = "gold";
})

// 4 div #info
// avec une fonction anonyme : mouseover()

let divInfo = document.querySelector("#info")
//je selectionne ma div par son id
divInfo.addEventListener("mouseover", function () {
    divInfo.style.backgroundColor = "gold";
    divInfo.style.borderRadius = "50%";
    divInfo.style.backgroundColor = "gold";
    divInfo.innerHTML = "gold";
})

let divPrimary = document.querySelector("#primary")
//je selectionne ma div par son id
divPrimary.addEventListener("mouseout", function () {
    divPrimary.style.backgroundColor = "gold";
    divPrimary.style.borderRadius = "50%";
    divPrimary.style.backgroundColor = "gold";
    divPrimary.innerHTML = "gold";
})

// 4 div #success
//  click et reclick

let divChangeCouleur = document.getElementById('success')

divChangeCouleur.addEventListener('click', function(){
    if(divChangeCouleur.classList.contains('vert')){
        divChangeCouleur.classList.remove('vert')
        divChangeCouleur.classList.add('gold')
        divChangeCouleur.innerHTML = 'Gold'
    }else{
        divChangeCouleur.classList.remove('gold')
        divChangeCouleur.classList.add('vert')
        divChangeCouleur.innerHTML = 'Vert'        
    }
})

let imageChat = document.querySelector('img');
imageChat.style.width = "300px";
let lesP = document.querySelectorAll('.toggle p')

//querySelectorAll stock un tableau donc pour y mettre du style c'est un par un en choisissant l'index correspondant

// lesP[0].style.textDecoration = 'underline';
// lesP[0].style.textDecoration = 'underline';
// lesP[0].style.textDecoration = 'underline';

for(let tabP of lesP){
    tabP.style.textDecoration = 'underline';
    tabP.style.color = "#ee3366"
    tabP.style.fontWeight = 'bolder'

}

lesP[0].addEventListener('click',()=>{
    imageChat.classList.add('hide')
})

lesP[1].addEventListener('click',()=>{
    imageChat.classList.remove('hide')
})

lesP[2].addEventListener('click',()=>{
    imageChat.classList.toggle('hide')
})

//Modifier le comportement par defaut en cas d'evenement

// les evenements sont associé a une action par defaut
//la fonction de gestionnaire (function dans les parametres du event.listener), par defaut lorsqu'elle est executée, recoit l'event objet en tant qu'argument (cet objet a été créé lorsque l'evenement ou l'action qui vous interesse s'est produit)
// l'objet event( ou e ou ev) est qu'un objet javascript, contient des informations sur l'action qui vient de se produire, avec de nombreuses propriétées et methodes
//Definir le event en tant que parametre de votre fonction est facultatif mais parfois il est inutile que la fonction de gestionnaire connaisse l'evenement qui s'est produit

//il est possible d'annuler ce comportement par defaut en appelant la methode preventDefault() sur l'objet event
document.querySelector('#interdit').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Continuez plutot a lire le cours');
})

//La methode preventDefault() est particulierement utile pour eviter que la soumission d'un formulaire recharge la page


//-----------------------GESTION DES FORMULAIRES----------------------------------

let prenomm = document.querySelector('#prenom')
console.log(prenomm);

//en js pour acceder a la valeur d'une zone de texte dans un formulaire, on utilise la propriété value
prenomm.value= "sadek"
let prenommValue = prenomm.value; 
let submit = document.querySelector('#submit');
submit.addEventListener('click', (event)=>{
    event.preventDefault();
    // je recupere la valeur de l'element input prenom
    let prenommValue = prenom.value;
    console.log(prenommValue);
})

//Focus et Blure pour les formulaires
//c'est deux evenement qu'on utlise sur le formulaire

//focus au chargement de la page
// prenomm.focus()

//sinon

//focus:
prenomm.addEventListener('focus', ()=>{ // utilisateur clique dans le champ de texte
    prenomm.style.width = '250px'
})


//blur
// prenomm.addEventListener('blur', ()=>{ // utlisateur clique en dehors du champs de texte
//     prenomm.style.width = '500px'
// })

//evenement change: l'evenement change est declenché lorsqu'un changement de la valeur d'un element html est realisé par l'utilisateur

// methode 1 on selectionne chaque element:

// document.querySelector('#html').addEventListener('change', (event)=>{
//     console.log(event.target);
//     if (event.target.checked) { //pour html checked
//         document.querySelector('#labelHTML').style.color = 'red'
    
//     } else {
//         document.querySelector('#labelHTML').style.color = 'blue' 
//     }
// })
// document.querySelector('#css').addEventListener('change', (event)=>{
//     console.log(event.target);
//     if (event.target.checked) { //pour css checked
//         document.querySelector('#labelCSS').style.color = 'red'
        
//     } else {
//         document.querySelector('#labelCSS').style.color = 'blue' 
//     }
// })
// document.querySelector('#js').addEventListener('change', (event)=>{
//     console.log(event.target);
//     if (event.target.checked) { //pour js checked
//         document.querySelector('#labelJS').style.color = 'red'
        
//     } else {
//         document.querySelector('#labelJS').style.color = 'blue' 
//     }
// })

//methode 2 avec la boucle for of
let checks = document.getElementsByName('languages')// variable checks dans laquelle je stock mes inputs => un tableau
for(let button of checks){
    button.addEventListener('change', (event)=>{ //evenement change sur les elements input case à cocher
        //je verifie la valeur du checked de l'element dans mon objet event => true si la case est cochée
     if (event.target.checked) { //pour html checked
        event.target.labels[0].style.color="red"
    
    } else {//la case est decochée = false, 
        //event.target.label[0] represente le label de la case a cocher
        //indice 0 au niveau du label car j'ai un seul element <balise> label
        event.target.labels[0].style.color="blue"      //j'applique la couleur blue sur le label  
    }

    })
}

//bouton radio
let radio = document.getElementsByName('niveau')
for (let button of radio) {
    button.addEventListener('change', (event)=>{
        if (event.target.checked) {
            switch (event.target.value) {
                case "acquis":

                event.target.labels[0].style.color = 'green';                    
                break;
                case "en cours d'acquisition":

                event.target.labels[0].style.color = 'orange';
                break;
                case "non acquis":

                event.target.labels[0].style.color = 'red';
                break;
            
            }
            
        } else {
            
        }
    })
    
}