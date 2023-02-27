// alert('ok')


//exercice 1:

//2 utilisateurs viennent de s'inscrire sur votre site
// le premier est : Jean 58 ans
//le deuxieme est : Xavier 32 ans 
//creeez les vcariables prenoms et age pour chacun
//les afficher sur la console


//exercice 2:

//generer une phrase a l'aide de 2 variables qui sera : "Bonjour ...., tu as .... ans"
//afficher la string sur la console


//exercice 3:
// demander a l'utilisateur son prenom via un prompt
// afficher sur la page "bonjour prenom de l'utilisateur"
// demnder a l'utilisateur 2 nombres entiers
// afficher le résultat de l'addition de ces nombres



 var prenom = "Jean"
 var prenom2 = "Xavier"
 var age = 58 + " ans"
 var age2 = 32 + " ans"
console.log(prenom, age);
console.log(prenom2, age2);
console.log(`Bonjour ${prenom}, tu as ${age}`); //methode back quote
console.log("Bonjour " + prenom + ", tu as " + age + " !"); // methode concatenation

//dans la console pour aller a la ligne on met "\n"

let nom = prompt("Entrez votre prénom svp: ");
document.write("Bonjour " + nom + "<br>");

let nombre = prompt("Veuillez entrer un nombre svp");
let nombre2 = prompt("Entrez un autre nombre svp");
let unNombre = parseFloat(nombre) 
let unNombre2 = parseFloat(nombre2)
let addition = unNombre + unNombre2

//ou let nombre = parsefloat(prompt("Veuillez entrer un nombre svp"));
//   let nombre2 = parsegloat(prompt("Entrez un autre nombre svp"));
//   let addition = nombre + nombre2

document.write("<br>" + "Le résultat de l'addition est = " + addition)
