// alert("ok");

//-----------1ere methode:

let select1 = titreNiveau1;
console.log(select1);

//-----------2eme methode:
//getelementById : Selection via id
let select2 = document.getElementById('titreNiveau1')
console.log(select2);

//-----------3eme methode:
let selectClass = document.getElementsByClassName('selectClass')
console.log(selectClass);

//lorsqu'on selectionne plusieurs elements en meme temps avec getElementsByClassName, on crée un tableau en js qui affichera dans la console avec l'intitulé HTMLCollection.
//comme un tableau le premier element aura l'index 0
//grace a ca je peux viser un seul element 
console.log(selectClass[1]);

//on va aller plus loin en ciblant ce qui se trouve dans l'element 
console.log(selectClass.innerHTML)

//innerHTML permet de definir le contenu de la balise et de le selectionner dans le but de l'identifier, de le modifier ou le manipuler autrement


//mini exo: modifier le contenu du h2
let aChanger = document.getElementsByClassName('aChanger');
aChanger[0].innerHTML ='Je change le titre, YOUHOU!!!';


//-----------4eme methode: getElementsByTagName

let lesP = document.getElementsByTagName('p'); 
// on cherche tout les paragraphes de notre page
//on recupere un tableau d'element
console.log(lesP);
lesP[0].style.backgroundColor = "hotpink"


//mini exo 2:
//selectionner le premier paragraphe et lui donner le style suivant:
// - border-radius (20px)
// - color (#fff)
// - padding (10px)

lesP[0].style.backgroundColor = "hotpink" ;
lesP[0].style.color = "#fff" ;
lesP[0].style.borderRadius = "20px" ;
lesP[0].style.padding = "10px";

//Grace a ma variable dans laquelle j'ai selectionner tout les 'p' je peux viser un seul element grace a son index. Pour faire du css j'utilise la propriété .style suivi des meme declaration que j'utilise en CSS, avec du camelCase a la place du kebab-case
// la propriété styele permet d'acceder finement au styles qui concernent un element particulier.
 

//selctionner tout les 'p' dans la page et les mettre en majuscule:

//façon 1:

let lesPi = lesP.length
console.log(lesPi)

for(let i = 0; i < lesP.length ; i++) {
    lesP[i].style.textTransform = "uppercase";
    
}

//2eme façon:
//la boucle for of : je declare une variable p qui represente chaque element dans le tableau lesP, au niveau de l'instruction à executer, j'appelle la variale p en lui attribuant le style souhaité avec la propriété .style

for(let p of lesP) {
    p.style.textTransform = "uppercase"
}

// je change la couleur du fond mon titre h1

select2.style.backgroundColor = "turquoise"
select2.style.color = "#fff" ;
select2.style.borderRadius = "20px" ;
select2.style.padding = "10px";

//5eme methode:
let div = document.querySelector('div');
console.log(div);

div.style.border = "1px solid grey"
//la methode querySelector retourne le 1er element trouvé dans les parametres.
//L'avantage de querySelector c'est qu'il utilise la syntaxe de selection CSS (#id, .class, <balise>)

//6eme methode: querySelectorAll
//selectionne toutes les balises en ensemble et retourne un array d'element

let query = document.querySelectorAll ('p.selectClass');
//on a deux paragraphes qui ont la classe selectClass
console.log(query[1].innerHTML);

let rajout = document.querySelector('div.col-4>p.selectClass')
console.log(rajout);
rajout.innerHTML = '<span>je suis la </span>'



//CREATION D'UN NOUVEL ÉLÉMENT:

let section = document.querySelector("section")

//pour créer un element nous utilisons la methode createElement(), puis nous l'integrons dans le noeud souhaité

let nouveauParaFin = document.createElement('p');
nouveauParaFin.innerText = "je suis un nouveau paragraphe a la fin de la section"
section.append(nouveauParaFin); 
//append ajoute du contenu a la fin de la section
//append accepte tout les elements

//appendChild(): methode ajoute un element HTML enfant a la fin d'un element parent n'accepte que les elementde type balise

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerText = "je suis un nouveau paragraphe a la fin de la section"
section.prepend(nouveauParaDebut); 
// prepend insere du contenu au debut de la section


//DEPLACER UN ÉLÉMENT:
//pour deplacer un element il nous faut 3 parametres:
    //-le parent
    //-l'element a deplacer
    //l'element qui vient apres


//l'element parent:
let parent = document.querySelector("main")
//l'element a deplacer:
let sousTitre = document.querySelector('h2')
//l'element qui vient apres
let toMove = document.querySelector("h4")


parent.insertBefore(toMove, sousTitre)

//SUPPRIMER UN ÉLÉMENT:
//pour supprimer un element il nous faut 2 parametres
    //- le parent 
    //- l'element a supprimer

// le parent:
let ul = document.querySelector('ul')
//l'element a supprimer

let elementSupp = document.getElementsByTagName("li")[1]
// ou let elementSupp = document.querySelectorAll("ul")[1]

//pour supprimer on utilise .removeChild 
// ul.removeChild(li)[1]

//CREER UN ATTRIBUT ET SA VALEUR:

//setAttribute() methode pour ajouter un nouvel attribut ou changer sa valeur d'un attribut existant pour un element

let baliseA1 = document.querySelector('a')
baliseA1.setAttribute('monAttribut', 'valeurAttribut')
//ici je rajoute un attribut
console.log(baliseA1);
///ici on a changer la valeur de l'attribut
baliseA1.setAttribute("href", "attribut.html")

let lesA = document.querySelectorAll('a')
//ici pour recuperer l'attribut du troisieme attribut il faut indiquer l'index 1 car le li[1] est supprimé de la dom
let valeursA2 = lesA[1].getAttribute("href");
console.log(valeurA2);

//AUTRES METHODES POUR MANIPULER LES ATTRIBUTS:

    //- HasAttribute() : ici on test la presence d'un attribut particulier pour un element, cette methode retourne une valeur booléenne
        //ex: hasAttribute('id')

    //- getAttributeNames() : nous retourne les noms des attributs d'un element sous forme d'un tableau
        //ex: h1.getAttributeNames()

    //- removeAttribute() : pour supprimer un attribut d'un element 
        //ex: p.removeAttribute('class')

    //- attributes : liste des attributs d'un element specifié elle renvoie un objet avec les noms et les valeurs associées d'un element



//mini exo:

select2.innerText = ' '

let petitA = document.createElement('a');
petitA.setAttribute("href", 'https://developer.mozilla.org/fr/docs/Web/JavaScript');
petitA.setAttribute("target", "_blank");
select2.append(petitA);

petitA.innertext="cours JS";
petitA.style.textdecoration = ('none');
petitA.style.color = "white";




