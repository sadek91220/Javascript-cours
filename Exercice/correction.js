// //exercice 1:

// //avec method switch

// let jour = prompt('Quel jours sommes nous?').toLowerCase(); //toLowerCase pour que tout ce qu'ecrit l'utilisateur dans le prompt sera en minuscule
// console.log(jour);

// switch (jour) {
//     case "lundi":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc Mardi`)
        
//         break;

//     case "mardi":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc Mercredi`)
        
//         break;
//     case "mercredi":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc jeudi`)
        
//         break;

//     case "jeudi":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc vendredi`)
        
//         break;
//     case "vendredi":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc samedi`)
        
//         break;
//     case "samedi":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc dimanche`)
        
//         break;
//     case "dimanche":
//         document.querySelector('#p1').innerText = (`Nous sommes ${jour} et demain nous serons donc lundi`)
        
//         break;

//     default:
//         document.querySelector('#p1').innerText = `vous avez rentré ${jour} mais ceci n'est pas un jour de la semaine` 
//         break;
// }

// //methode avec if else

// if (jour == 'lundi') {
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ', demain nous serons donc mardi.';
// }else if (jour == 'mardi'){
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ', demain nous serons donc mercredi.';
// }else if (jour == 'mercredi'){
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ', demain nous serons donc jeudi.';
// }else if (jour == 'jeudi'){
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ', demain nous serons donc vendredi.';
// }else if (jour == 'vendredi'){
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ', demain nous serons donc samedi.';
// }else if (jour == 'samedi'){
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ', demain nous serons donc dimanche.';
// }else if (jour == 'dimanche'){
//     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes <strong>' + jour + '</strong>, demain nous serons donc lundi.';
// }else {
//     document.getElementById('p1').innerHTML = 'Ceci n\'est pas un jour de la semaine';
// }


//methode boucle

// let joursSemaine = ["lundi", "mardi", "mercredi","jeudi","vendredi","samedi","dimanche"];
//                     //0       //1       //2       //3       //4      //5       //6

// for(let i = 0; i < joursSemaine.length; i++ ) {
     
//      if(joursSemaine.includes(jour)){
          
//           i = joursSemaine.indexOf(jour)
//                if(i == (joursSemaine.length - 1) ){
//                     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes <strong>' + joursSemaine[i]  + '</strong>, demain nous serons ' + joursSemaine[0];
//                }else{
                   
//                     document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes <strong>' + joursSemaine[i]  + '</strong>, demain nous serons ' + joursSemaine[i+1];
//                }
//                break
//      }else{
//           document.getElementById('p1').innerHTML = 'Ceci n\'est pas un jour de la semaine';
//      }
// }

//exercice 12

//premiere methode
// let mois = parseInt(prompt('Choisissez un mois :', 'saisir un numéro entre 1 et 12'));
// let moisNom = ['', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
// if (isNaN(mois)) { // si la personne ne rentre pas un nombre
//     document.getElementById('p3').innerHTML = 'Vous n\'avez pas mis un chiffre';
// } else {// ici c'est forcément un nombre
//     if (mois == 2) { // si la personne répond 2
//         document.getElementById('p2').innerHTML = 'Le mois n°' + mois + ', ' + moisNom[mois] + ', fait 28 jours.';
//     } else if ((mois == 4) || (mois == 6) || (mois == 9) || (mois == 11)) { // si la personne répond 4 / 6 / 9 / 11
//         document.getElementById('p2').innerHTML = 'Le mois n°' + mois + ', ' + moisNom[mois] + ', fait 30 jours.';
//     } else if ((mois == 1) || (mois == 3) || (mois == 5) || (mois == 7) || (mois == 8) || (mois == 10) || (mois == 12)) { // si la personne répond 1 / 3 / 5 / 7 / 8 / 10 / 12
//         document.getElementById('p2').innerHTML = 'Le mois n°' + mois + ', ' + moisNom[mois] + ', fait 31 jours.';
//     } else {
//         document.getElementById('p2').innerHTML = 'Vous devez saisir un nombre entre 1 et 12.';
//     }
// }

//methode 2

// const TAB1 =[4,6,9,11];
// const TAB2 = [1,3,5,7,8,10,12];
// const FEV = 2

//      if (isNaN(mois)) { // si la personne ne rentre pas un nombre
//           document.getElementById('p2').innerHTML = 'Vous n\'avez pas mis un chiffre';
//      } else {// ici c'est forcément un nombre

//           for(let i=0; i<= moisNom.length; i++){
//                               //4
//                if(TAB1.includes(mois)){
//                     document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 30 jours.`;
//                }else if(TAB2.includes(mois)){
//                     document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 31 jours.`;
//                }else if( mois === 2){
//                     document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 28 jours.`;
//                }else{
//                     document.getElementById('p2').innerText = `vous devez saisir un nombre entre 1 et 12 `;

//                }

//           }
             
//      }

let BaseDeDonnees = [
    {"prenom": "Tom","nom": "Lechat","email": "tom.lechat@gmail.com", "mdp": "poisson!"},
    {"prenom": "Jerry","nom": "Lasouris","email": "jerry.lasouris@gmail.com","mdp": "fromage!"},
    {"prenom": "twity","nom": "Lecanard","email": "twity.lecanard@gmail.com","mdp": "mignon!"}
];

let mail = prompt("veuillez entrer votre e-mail :")
let pass = prompt("veuillez entrer votre mot de passe :")

for(let i =  0 ; i < BaseDeDonnees.length; i++){
    if (mail === BaseDeDonnees[i].email && pass === BaseDeDonnees[i].mdp){
        document.write(`Bonjour ${BaseDeDonnees[i].prenom}`)
        
    }else{
        document.write(`email ou mot de passe incorrect`)
        ;

    }

    break

}

let nombreArrondi = parseInt(Math.random()*100);
          console.log(nombreArrondi);

     for(let i=1 ; i <= 6 ; i++){
          let choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris e,tre 0 et 100, Attention vous avez 6 essais !'));
          if(choixUser === nombreArrondi){
               document.write("Vous avez gagné, bravo la réponse était bien " + nombreArrondi+ '.' );
               break
          }else {

               if(choixUser < 0 || choixUser > 100 || isNaN(choixUser)){

                         alert('Vous devez saisir un nombre compris entre 0 et 100 !' + i  +'/6');
                    i--; // ici on décrémente i car l'uilisateur n'a pas rentré une valeur compris entre 0 et 100 -> ça ne compte pas dans les essais ( si je suis sur le 3 ème essai je ne perds ma position )
          
               }else if(choixUser > nombreArrondi){
                    alert('Visez plus bas ! '  + i  +'/6');
               }else if(choixUser < nombreArrondi) {
                    alert('Visez plus haut !'  + i  +'/6');
               }else{
                    alert("Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était" + nombreArrondi+ '.' );
               }
               
               
          }
        

     }