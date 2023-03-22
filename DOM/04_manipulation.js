// alert('ok)
//  Validation du formulaire

//  je selectionne mon formulaire d'inscription grace a son id => variable letInscription
let letInscription = document.querySelector('#form-inscription');

// console.log(letInscription);

// je recupere les information obtenues lors de l'envoi grace au submit
letInscription.addEventListener('submit', inscription);

function inscription(event){
    event.preventDefault(); // preventDefault permet de bloquer les comportements par defaut, ici j'empeche l'envoi du formulaire
    console.log('ok');
    let info = document.querySelector('#info')
    let erreur = document.querySelectorAll('.erreur')
    console.log(event.target.prenom.value);
    let prenom = (event.target.prenom.value).trim(); // method qui supprime les espaces avant et apres une chaine de caractere
    let nom = (event.target.nom.value).trim();
    let mail = (event.target.mail.value).trim();
    let mdp = (event.target.mdp.value).trim();
    let confmdp = (event.target.confmdp.value).trim();
    // console.log(prenom, nom, mail, mdp, confmdp);
    let data = [prenom, nom, mail, mdp, confmdp];
// si le tableau contient un element avec une chaine de caractere vide
    if (data.includes('')) {
        info.innerHTML= `<p class="alert alert-danger"> Tout les champs doivent etre rempli</p>`
        for(let i=0; i < event.target.length-1; i++){
            if(event.target[i].value === ''){
            event.target[i].classList.add('error');
        
            }else{
            event.target[i].classList.remove('error');
            }
        }
    }else{
        if (!isNaN(prenom) || !isNaN(nom)){
            info.innerHTML = `<p class="alert alert-danger"> /!\ INVALIDE, le champ Nom et/ou Prenom doit etre rempli correctement</p>`;
            if (!isNaN(prenom) && !isNaN(nom)){
                event.target.prenom.classList.add('error');
                event.target.nom.classList.add('error')
            }else if (!isNaN(prenom)) {
                event.target.prenom.classList.add('error')  
                event.target.nom.classList.remove('error')
            }else if(!isNaN(nom)){
                event.target.nom.classList.add('error')
                event.target.prenom.classList.remove('error')

            }
        }else{
        //je vide la variable info
            info.innerHTML = "",
            event.target.nom.classList.remove('error')
            event.target.prenom.classList.remove('error')
        //validation du prenom
                if (prenom.length < 3) {
                    erreur[0].innerHTML = `<div class="alert alert-danger"> ! le prenom doit comporter minimum 3 caracteres </div>`;
                    event.target.prenom.classList.add('error')
                    event.target.prenom.classList.remove('valid')
                }else{
                    event.target.prenom.classList.remove('error')
                    event.target.prenom.classList.add('valid')
                    erreur[0].innerHTML = "";
            
                }
        
            if (nom.length < 3) {
                erreur[1].innerHTML = `<div class="alert alert-danger"> ! le prenom doit comporter minimum 3 caracteres </div>`;
                event.target.nom.classList.add('error')
                event.target.nom.classList.remove('valid')
            }else{
                event.target.nom.classList.remove('error')
                event.target.nom.classList.add('valid')
                erreur[1].innerHTML = "";
                
            }

        }
        //validation du mail
//c'est un moyen de definir ce  qui est accepté ou non comme caractere. Le REGEX qui suit sert a definir ce qui est accepté en terme d'email.
let myRegexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,5}$/;    
// ^ indique le debut du regex
// [] definissent une intervalle de caracteres
// + une ou plusieur occurences de l'expression a-zA-Z0-9._- (exemple: aaaa ou 2222)
// \ indique que le caractere qui suit doit etre recherché en tant que tel (ici le .)
// $ indique la fin du regex

        if (!myRegexEmail.test(mail)){// la method .test verifie si il y a une correspondance entre le contenu de la variable mail et l'expression
            event.target.mail.classList.remove('valide');
            event.target.mail.classList.add('error');

            erreur[2].innerHTML = `<div class="alert alert-danger"> ! le mail est incorrect </div>`;

        }else{
            event.target.mail.classList.remove('error')
            event.target.mail.classList.add('valid')
            erreur[2].innerHTML = ""
        }
//validation du mot de passe

let regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!&#])\S{6,12}$/;
// (?=.*[a-z]) permet d'afficher les minuscules
// (?=.*[A-Z]) permet d'afficher les majuscules
// (?=.*[0-9]) permet de tester la presence de chiffres
// (?=.*[$@!&#]) permet de tester la presence des caracteres speciaux parmi ceux qui sont indiqués
// S{6,12} permet d'afficher entre 6 et 12 caracteres

        if (regexMdp.test(mdp)) {
            event.target.mdp.classList.remove('error')
            event.target.mdp.classList.add('valid')
            erreur[3].innerHTML = ""

            if (confmdp !== mdp) {
                event.target.confmdp.classList.add('error');
                event.target.confmdp.classList.remove('valide');
                erreur[4].innerHTML = "! Entrez un mot de passe qui comprend entre 6 et 12 caracteres comprenant des minuscule, des majuscules, des carcteres speciaux ou/et des chiffres </div>"
                
                
            }else{
                event.target.confmdp.classList.remove('error')
                event.target.confmdp.classList.add('valid')
                erreur[4].innerHTML = `<p class="alert alert-success">Vous etes inscrit, bravo!</p>`
            }
        }else{
            event.target.mdp.classList.remove('valide');
            event.target.mdp.classList.add('error');

            erreur[3].innerHTML = `<div class="alert alert-danger"> ! Entrez un mot de passe qui comprend entre 6 et 12 caracteres comprenant des minuscule, des majuscules, des carcteres speciaux ou/et des chiffres </div>`;

        }
    
    }
}


//-------------------------------PARTIE 2: Keydown--------------------------------------

document.addEventListener('keydown', clavier);
function clavier(event) {
    let mario = document.getElementById('mario');


    // la propriété offSetTop renvoie la position du haut (en px) par rapport au haut de l'element offSetParent. l'element offSetParent est l'ancetre le plus proche qui a une position autre que statique
    //---------------------- if avec .key---------------------
    if(event.key == "ArrowUp"){

        mario.style.top = mario.offsetTop - 10 + 'px';

    }else if(event.key == "ArrowRight"){

        mario.style.left = mario.offsetLeft + 10 + 'px';
        mario.style.transform = "scaleX(1)";

    }else if(event.key == "ArrowDown"){

        mario.style.top = mario.offsetTop + 10 + 'px';
        
    }else if(event.key == "ArrowLeft"){

        mario.style.left = mario.offsetLeft - 10 + 'px';
        mario.style.transform = "scaleX(-1)";
        
    }else if (event.key == "z") {
        mario.style.top = mario.offsetTop - 10 + 'px';  // en haut a gauche
        mario.style.left = mario.offsetLeft - 10 + 'px';
        mario.style.transform = "scaleX(-1)";
        mario.style.rotate = "40deg";

    }
    else if (event.key == "s") {
        mario.style.top = mario.offsetTop - 10 + 'px';  // en haut a droite
        mario.style.left = mario.offsetLeft + 10 + 'px';
        mario.style.transform = "scaleX(1)";
        mario.style.rotate = "-40deg";
    }
    else if (event.key == "q") {
        mario.style.top = mario.offsetTop + 10 + 'px';  // en bas a gauche
        mario.style.left = mario.offsetLeft - 10 + 'px';
        mario.style.transform = "scaleX(-1)";
        mario.style.rotate = "-40deg";
    }
    else if (event.key == "d") {
        mario.style.top = mario.offsetTop + 10 + 'px';  // en bas a droite
        mario.style.left = mario.offsetLeft + 10 + 'px';
        mario.style.transform = "scaleX(1)";
        mario.style.rotate = "40deg";
    }
//     console.log(event);



// switch (event.key) {
//     case 'i':        
//         mario.style.top = mario.offsetTop - 10 + 'px'
//         break
//     case 'l':
//         mario.style.left = mario.offsetLeft + 10 + 'px'
//         break
//     case 'k':
//         mario.style.top = mario.offsetTop + 10 + 'px'
//         break
//     case 'j':
//         mario.style.left = mario.offsetLeft - 10 + 'px'
//         break;
//         document.write(br)

// }
if (event.keyCode == 38) {
    mario.style.top = mario.offsetTop - 10 + 'px'
}else if(event.keyCode == 39){
    mario.style.left = mario.offsetLeft + 10 + 'px'
}else if(event.keyCode == 40){
    mario.style.top = mario.offsetTop + 10 + 'px'
}else if(event.keyCode == 37){
    mario.style.left = mario.offsetLeft - 10 + 'px'
}
}



//--------------------------Partie 3- Carousel dynamique--------------------------

let ArrowRight= document.querySelector('#right')

ArrowRight.addEventListener('mouseover', carouselImageRight);
function carouselImageRight() {
    let img1 = document.querySelector('#carousel').getAttribute('src')
    switch (img1) {
        case 'chat1.jpg':
            document.querySelector('#carousel').src="chat2.jpg"
            break;
        case 'chat2.jpg':
            document.querySelector('#carousel').src="chat3.jpg"
            break;
        case 'chat3.jpg':
            document.querySelector('#carousel').src="chat4.jpg"
            break;
        case 'chat4.jpg':
            document.querySelector('#carousel').src="chat5.jpg"
            break;
        

            
            
            
        default:
            break;
    }
    console.log(img1);
}

let ArrowLeft= document.querySelector('#left')

ArrowLeft.addEventListener('mouseover', carouselImageLeft);
function carouselImageLeft() {
    let img1 = document.querySelector('#carousel').getAttribute('src')
    switch (img1) {
        case 'chat5.jpg':
            document.querySelector('#carousel').src="chat4.jpg"
            break;
        case 'chat4.jpg':
            document.querySelector('#carousel').src="chat3.jpg"
            break;
        case 'chat3.jpg':
            document.querySelector('#carousel').src="chat2.jpg"
            break;
        case 'chat2.jpg':
            document.querySelector('#carousel').src="chat1.jpg"
            break;


        

            
            
            
        default:
            break;
    }
}


let imgClick= document.querySelector('#carousel')

imgClick.addEventListener('mouseover', carouselImageClick);
function carouselImageClick() {
    let img3 = document.querySelector('#carousel').getAttribute('src')
    switch (img3) {
        case 'chat1.jpg':
            document.querySelector('#carousel').src="chat2.jpg"
            break;
        case 'chat2.jpg':
            document.querySelector('#carousel').src="chat3.jpg"
            break;
        case 'chat3.jpg':
            document.querySelector('#carousel').src="chat4.jpg"
            break;
        case 'chat4.jpg':
            document.querySelector('#carousel').src="chat5.jpg"
            break;
        case 'chat5.jpg':
            document.querySelector('#carousel').src="chat1.jpg"
            break;


        

            
            
            
        default:
            break;
    }
}


//---------------------------Slideshow----------------------

let img = 0; // initiation de la variable qui va nous servir à afficher les images
let timer = window.setInterval('slider()', 1500); // initialisation de la variable timer qui s'appuie sur la fonction predefinie setInterval(): en premier argument on appel la fonction que l'on va créé et un deuxieme argument, le temps en millisecondes.
//setInterval : methode qui appelle de maniere repetée une fonction avec un delai fixe entre chaque appel => lance une fonction apres un temps bien precis tout les millisecondes.

function slider() {
    let imgslider = document.getElementById('slider')
    img++;// on incremente puis
    imgslider.setAttribute('src', "chat"+ img +".jpg")// j'appelle de facon automatique les images par leurs noms (il evolue grace au code a la ligne)
    if (img == 5) {
        clearInterval(timer); //permet de stopper le setInterval des que la variable atteint 5
        // img = 0
    }
    
}