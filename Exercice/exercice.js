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

//-----Exercice 4:

//j'arrive sur un espace securisé au moyen du prenom et de l'age
//je dois saisir mon prenom et mon age pour m'identifier sur le site (au prealable stockées dans des variable prenom et age)
// en cas d'echec une alerte m'informe du probleme
// si tout va bien un message de bienvenue m'accueille
        
//        let identifiant = "sadek";
//        let age3 = 38;
//
//        let login = prompt("saisissez votre identifiant")
//        let verifAge = parseFloat(prompt("Saisissez votre age"))
//        login = login.toLocaleLowerCase(); // toLocaleLowerCase() pour tout mettre en minuscule et toLocaleUpperCase() pour tout mettre en majuscule
//        if (identifiant === login && age3 === verifAge) {
//            alert("Bienvenue " + identifiant + " !" + " Vous etes connecté !")
//        } else {
//            alert("Identifiant ou age incorrect")
//        }


//-------------Exercice 6 :

        //I - utilisez la methode slice : tranche pour renvoyer le mot "bananas".
        let txt = "i can eat bananas all day";
        txt22 = txt.slice(0,10)
        txt23 = txt.slice(18,25)
        console.log(txt22 + txt23)


        //II - Alerter le nombre d'éléments dans un tableau, en utilisant la bonne methode de tableau
        let cars = ["Volvo", "Jeep", "Mercedes"]
        console.log(cars.length);

        //III - utilisez la splice methode pour supprimer "Orange" et "apple" de fruit
        let fruits = ["banane", "orange", "Pomme", "kiwi"]
        fruits.splice(1,2)
        console.log(fruits);

        //IV - Choisissez l'operateur conditionnel ternaire correct pour alerter "trop jeune" si l'age est inferieur a 18 ans, sinon alerter assez vieux
        let age4 = 12
        alert((age4 < 18) ? "trop jeune" : "assez vieux")

        //V - on recoit un nombre, par exemple var number = 42; comment savoir de combien de dizaine (4) et d'unité (2) est composé ce nombre ? avec l'operateur modulo
        let number = 42
        let dizaine = number % 10
        let unite = dizaine % 1
        console.log(dizaine, unite);
        


        //VI - utilisez la methode string correcte pour remplacer le mot "hello" par le mot "welcome"
        let txt2 = "hello world";
        console.log(txt2.replace("hello","welcome"));

        //VII - utilisez les caractere d'echappement pour alerter (We are "Vikings")
        alert("We are \"Vikings\" !")
