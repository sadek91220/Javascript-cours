// // // alert('ok')


// // //exercice 1:

// // //2 utilisateurs viennent de s'inscrire sur votre site
// // // le premier est : Jean 58 ans
// // //le deuxieme est : Xavier 32 ans 
// // //creeez les vcariables prenoms et age pour chacun
// // //les afficher sur la console


// // //exercice 2:

// // //generer une phrase a l'aide de 2 variables qui sera : "Bonjour ...., tu as .... ans"
// // //afficher la string sur la console


// // //exercice 3:
// // // demander a l'utilisateur son prenom via un prompt
// // // afficher sur la page "bonjour prenom de l'utilisateur"
// // // demnder a l'utilisateur 2 nombres entiers
// // // afficher le résultat de l'addition de ces nombres



// // // var prenom = "Jean"
// // // var prenom2 = "Xavier"
// // // var age = 58 + " ans"
// // // var age2 = 32 + " ans"
// // //console.log(prenom, age);
// // //console.log(prenom2, age2);
// // //console.log(`Bonjour ${prenom}, tu as ${age}`); //methode back quote
// // //console.log("Bonjour " + prenom + ", tu as " + age + " !"); // methode concatenation

// // //dans la console pour aller a la ligne on met "\n"

// // //let nom = prompt("Entrez votre prénom svp: ");
// // //document.write("Bonjour " + nom + "<br>");

// // //let nombre = prompt("Veuillez entrer un nombre svp");
// // //let nombre2 = prompt("Entrez un autre nombre svp");
// // //let unNombre = parseFloat(nombre) 
// // //let unNombre2 = parseFloat(nombre2)
// // //let addition = unNombre + unNombre2

// // //ou let nombre = parsefloat(prompt("Veuillez entrer un nombre svp"));
// // //   let nombre2 = parsegloat(prompt("Entrez un autre nombre svp"));
// // //   let addition = nombre + nombre2

// // //document.write("<br>" + "Le résultat de l'addition est = " + addition)

// // //-----Exercice 4:

// // //j'arrive sur un espace securisé au moyen du prenom et de l'age
// // //je dois saisir mon prenom et mon age pour m'identifier sur le site (au prealable stockées dans des variable prenom et age)
// // // en cas d'echec une alerte m'informe du probleme
// // // si tout va bien un message de bienvenue m'accueille
        
// // //        let identifiant = "sadek";
// // //        let age3 = 38;
// // //
// // //        let login = prompt("saisissez votre identifiant")
// // //        let verifAge = parseFloat(prompt("Saisissez votre age"))
// // //        login = login.toLocaleLowerCase(); // toLocaleLowerCase() pour tout mettre en minuscule et toLocaleUpperCase() pour tout mettre en majuscule
// // //        if (identifiant === login && age3 === verifAge) {
// // //            alert("Bienvenue " + identifiant + " !" + " Vous etes connecté !")
// // //        } else {
// // //            alert("Identifiant ou age incorrect")
// // //        }


// // //-------------Exercice 6 :

// //         //I - utilisez la methode slice : tranche pour renvoyer le mot "bananas".
// //         // let txt = "i can eat bananas all day";
// //         // txt22 = txt.slice(0,10) // i can eat
// //         // txt23 = txt.slice(18,25) //  all day
// //         // console.log(txt22 + txt23)

// //         //II - Alerter le nombre d'éléments dans un tableau, en utilisant la bonne methode de tableau
// //         // let cars = ["Volvo", "Jeep", "Mercedes"]
// //         // alert(`Le nombre d'éléments est ${cars.length}`);

// //         //III - utilisez la splice methode pour supprimer "Orange" et "apple" de fruit
// //         // let fruits = ["banane", "orange", "Pomme", "kiwi"]
// //         // fruits.splice(1,2)
// //         // console.log(fruits);

// //         //IV - Choisissez l'operateur conditionnel ternaire correct pour alerter "trop jeune" si l'age est inferieur a 18 ans, sinon alerter assez vieux
// //         // let age4 = 17
// //         // alert((age4 < 18) ? "trop jeune" : "assez vieux")

// //         //V - on recoit un nombre, par exemple var number = 42; comment savoir de combien de dizaine (4) et d'unité (2) est composé ce nombre ? avec l'operateur modulo
// //         // let number = 42
// //         // let unite = number % 10
// //         // let dizaine = (number - unite) / 10
// //         // console.log(dizaine, unite);
// //         // if (unite !== 0){        //pour inclure aussi les valeurs negatives
// //         //    console.log(dizaine)
// //         //}


        
        
// //         //VI - utilisez la methode string correcte pour remplacer le mot "hello" par le mot "welcome"
// //         // let txt2 = "hello world";
// //         // console.log(txt2.replace("hello","welcome"));

// //         //VII - utilisez les caractere d'echappement pour alerter (We are "Vikings")
// //         //alert("We are \"Vikings\" !")

// // //---------Exercice 7:
// //         // j'ai 1000€ sur mon compte, je rajoute 50€ tout les mois combien de temps me faut il pour arriver a 2000€?

// //         // for (let i = 1000; i <= 2000; i+=50) {
            
// //         //     document.write(`<p>  ${i} </p> `);
// //         //     }

// //         // let combien = (i - 1000) / 50
// //         // console.log(combien)


// //         // let soldeCompte = 1000;
// //         // let nbrMois = 0 ;
// //         // while (soldeCompte < 2000){
// //         //     soldeCompte += 50;
// //         //     nbrMois++;
// //         //     document.write(`<p>ce mois ci j'ai sur mon compte ${soldeCompte} !</p> <br> `)
            

// //         // }
// //         // document.write(`pour atteindre cette somme j'ai du economiser pendant ${nbrMois} mois !`)

// //         //     let mois = 0
// //         // for (let solde = 1000; solde <= 2000; solde+=50) {
// //         //         mois++
// //         // }
// //         // document.write(`pour atteindre cette somme j'ai du economiser pendant au moins ${mois-1} mois !`)

// // //---------Exercice 8:
        
// //         // function utilisateur(){
            
                
// //         //     let nom7 = prompt("entrez votre prenom svp")
// //         //         if ( nom7 === typeof String) {
// //         //             age7 = parseFloat(prompt(`Bonjour ${nom7}, quel age as tu ? `))

// //         //         } else {
// //         //         alert("Incorrect, veuillez saisir votre prenom svp")
// //         //         nom7 = prompt("entrez votre prenom svp")
                  
// //         //         }
                
// //         //     // let age7 = parseFloat(prompt(`Bonjour ${nom7}, quel age as tu ? `))
// //         //     //     if (Number.isInteger(age7)) {
// //         //     //     } else {
// //         //     //     alert("Incorrect, veuillez saisir votre age svp")
// //         //     //     age7 = parseFloat(prompt(`Bonjour ${nom7}, quel age as tu ? `))  
// //         //     //     }
                
                
// //         //     document.write(`<p> Bonjour ${nom7} tu as ${age7} ans!</p>`)
// //         //     }        
            
        
        
        
// //         // utilisateur()

// // // Correction exercice 8:

// //             function hello() {
// //                 let prenom8 = prompt("Saisissez votre prenom :");
// //                 if (prenom8 !== " " && isNaN(prenom8)){
// //                     let age8 = prompt(`Bonjour ${prenom8}! Quel est votre age ? :`);
// //                     if (age8 --- null && !isNaN(age8)){
// //                         document.write(`<p> Bonjour ${prenom8} tu as ${age8} ans!</p>`)
// //                     }else{
// //                             alert("Entrez votre age")
// //                         }


// //                 }else{
// //                     alert("Incorrect inserez votre prenom svp")
// //                 }
                
// //             }
// //         hello()

// //---------Exercice 9:

// // grâce à votre script, créer une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet
//         // Ce lien sera de couleur Blanche et non souligné


//         let body = document.querySelector("body")
//         let nouveauParaDebut = document.createElement('h1');
//         nouveauParaDebut.innerText = "h1 - Cours JS "
//         body.prepend(nouveauParaDebut);

//         let h1 = document.querySelector("h1")
//         let nouveauParafin1 = document.createElement('a');
//         nouveauParafin1.innerText = "lien"
//         h1.append(nouveauParafin1);

//         let baliseA1 = document.querySelector('a');
//         baliseA1.setAttribute('href', 'https://developer.mozilla.org/fr/docs/Web/JavaScript')

//         nouveauParafin1.style.color = "#fff" ;
//         nouveauParafin1.style.textDecoration = "none" ;
//         nouveauParafin1.setAttribute("target", "_blank");
//         body.style.backgroundColor = "turquoise";



// //exercice 10:
//         const lundi = "lundi";
//         const mardi = "mardi";
//         const mercredi = "mercredi";
//         const jeudi = "jeudi";
//         const vendredi = "vendredi";
//         const samedi = "samedi";
//         const dimanche = "dimanche";

//         function joursPlus1() {
            
        
//         let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

//             let jourSemaine = prompt("Saisissez un jour de la semaine :");
//             switch (jourSemaine) {
//                 case lundi:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression correspond à valeur1
//                   alert(` ${jours[1]}!`);
//                   break;
//                 case mardi:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression correspond à valeur2
//                   alert(` ${jours[2]}!`);
//                   break;
                
//                 case mercredi:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression à valeurN
//                   alert(` ${jours[3]}!`);
//                   break;
//                 case jeudi:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression à valeurN
//                   alert(` ${jours[4]}!`);
//                   break;
//                 case vendredi:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression à valeurN
//                   alert(` ${jours[5]}!`);
//                   break;
//                 case samedi:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression à valeurN
//                   alert(` ${jours[6]}!`);
//                   break; 
//                 case dimanche:
//                   // Instructions à exécuter lorsque le résultat
//                   // de l'expression à valeurN
//                   alert(` ${jours[0]}!`);
//                   break; 
//                 default:
//                   // Instructions à exécuter lorsqu'aucune des valeurs
//                   // ne correspond
//                   alert("entrez un jour de la semaine")
//                   break;
//               }
//               }

//               joursPlus1()

            //   function joursSemaine2() {
            //     // let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
            //     let jourSemaine1 = prompt("Saisissez un jour de la semaine :");
            //     if (jourSemaine1 === "lundi") {
            //         alert("mardi")
            //     }
            //     if (jourSemaine1 === "mardi") {
            //         alert("mercredi")
            //     }
            //     if (jourSemaine1 === "mercredi") {
            //         alert("jeudi")
            //     }
            //     if (jourSemaine1 === "jeudi") {
            //         alert("vendredi")
            //     }
            //     if (jourSemaine1 === "vendredi") {
            //         alert("samedi")
            //     }
            //     if (jourSemaine1 === "samedi") {
            //         alert("dimanchei")
            //     }
            //     if (jourSemaine1 === "dimanche") {
            //         alert("lundi")
            //     } else {
            //         alert('Entrez un jour')
            //     }


            //   }
            //   joursSemaine2()

//exercice 11


        // const janvier = "1";
        // const fevrier = "2";
        // const mars = "3";
        // const avril = "4";
        // const mai = "5";
        // const juin = "6";
        // const juillet = "7";
        // const aout = "8";
        // const septembre = "9";
        // const octobre = "10";
        // const novembre = "11";
        // const decembre = "12";


        // function nbrJourMois() {
            
        
        // let calendrier = ["le mois de janvier possede 31 jours", "le mois de fevrier possede 28 jours", "le mois de mars possede 31 jours", "le mois de avril possede 30 jours", "le mois de mai possede 31 jours", "le mois de juin possede 30 jours", "le mois de juillet possede 31 jours", "le mois de aout possede 31 jours", "le mois de septembre possede 30 jours", "le mois de octobre possede 31 jours", "le mois de novembre possede 30 jours", "le mois de decembre possede 31 jours"]

        //     let numeroMois = prompt("Saisissez le numero correspondant au mois souhaité :");
        //     switch (numeroMois) {
        //         case janvier:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression correspond à valeur1
        //           alert(` ${calendrier[0]}!`);
        //           break;
        //         case fevrier:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression correspond à valeur2
        //           alert(` ${calendrier[1]}!`);
        //           break;             
        //         case mars:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[2]}!`);
        //           break;
        //         case avril:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[3]}!`);
        //           break;
        //         case mai:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[4]}!`);
        //           break;
        //         case juin:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[5]}!`);
        //           break; 
        //         case juillet:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[6]}!`);
        //           break; 
        //         case aout:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[7]}!`);
        //           break; 
        //         case septembre:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[8]}!`);
        //           break; 
        //         case octobre:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[9]}!`);
        //           break; 
        //         case novembre:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[10]}!`);
        //           break; 
        //         case decembre:
        //           // Instructions à exécuter lorsque le résultat
        //           // de l'expression à valeurN
        //           alert(` ${calendrier[11]}!`);
        //           break; 
        //         default:
        //           // Instructions à exécuter lorsqu'aucune des valeurs
        //           // ne correspond
        //           alert("entrez un numero relatif au mois recherché")
        //           break;
        //       }
        //       }
        //       nbrJourMois()

// exercice 12:

// let BaseDeDonnees = [
//     {"prenom": "Tom","nom": "Lechat","email": "tom.lechat@gmail.com", "mdp": "poisson!"},
//     {"prenom": "Jerry","nom": "Lasouris","email": "jerry.lasouris@gmail.com","mdp": "fromage!"},
//     {"prenom": "twity","nom": "Lecanard","email": "twity.lecanard@gmail.com","mdp": "mignon!"}
// ];

// function auth() {
//     let mail = prompt("veuillez entrer votre e-mail :")
//     let pass = prompt("veuillez entrer votre mot de passe :")
//         if (mail === "tom.lechat@gmail.com" && pass === "poisson!") {
//             document.write('bienvenue Tom Lechat')
            
//         }
//         else if (mail === "jerry.lasouris@gmail.com" && pass === "fromage!") {
//             document.write('bienvenue Jerry Lasouris')
//         }
//         else if (mail === "twity.lecanard@gmail.com" && pass === "mignon!") {
//             document.write('bienvenue Twity Lecanard')
//         }
//         else {
//             alert("Email ou mot de passe invalide ou inconnu")
//         }
    
// }
// auth()

//exercice 13


// function random() {
//     let nombreRandom = parseInt(Math.random() * 100)
//     console.log(nombreRandom);
//     alert("devinez le nombre caché entre 0 et 100"); 
//     essai = parseInt(prompt("essai 1/6"))
//     console.log(essai);
//     if (essai === Math.round(nombreRandom)) {
//         alert(`Bravo c'etait bien ${nombreRandom}`)
//     } else if (essai < Math.round(nombreRandom)) {
//         essai = parseInt(prompt(" plus grand essai 2/6"))
//         } else if (essai > Math.round(nombreRandom)) {
//             essai = parseInt(prompt("plus petit essai 2/6"))}
//             if (essai === Math.round(nombreRandom)) {
//             alert(`Bravo c'etait bien ${nombreRandom}`)
        
//         } else if (essai < Math.round(nombreRandom)) {
//             essai = parseInt(prompt(" plus grand essai 3/6"))
//             } else if (essai > Math.round(nombreRandom)) {
//                 essai = parseInt(prompt("plus petit essai 3/6"))}
//                 if (essai === Math.round(nombreRandom)) {
//                 alert(`Bravo c'etait bien ${nombreRandom}`)
            
//             } else if (essai < Math.round(nombreRandom)) {
//                 essai = parseInt(prompt(" plus grand essai 4/6"))
//                 } else if (essai > Math.round(nombreRandom)) {
//                     essai = parseInt(prompt("plus petit essai 4/6"))}
//                     if (essai === Math.round(nombreRandom)) {
//                     alert(`Bravo c'etait bien ${nombreRandom}`)
                
//                 } else if (essai < Math.round(nombreRandom)) {
//                     essai = parseInt(prompt(" plus grand essai 5/6"))
//                     } else if (essai > Math.round(nombreRandom)) {
//                         essai = parseInt(prompt("plus petit essai 5/6"))}
//                         if (essai === Math.round(nombreRandom)) {
//                         alert(`Bravo c'etait bien ${nombreRandom}`)
                    
//                     } else if (essai < Math.round(nombreRandom)) {
//                         essai = parseInt(prompt(" plus grand essai 6/6"))
//                         } else if (essai > Math.round(nombreRandom)) {
//                             essai = parseInt(prompt("plus petit essai 6/6"))}
//                             if (essai === Math.round(nombreRandom)) {
//                             alert(`Bravo c'etait bien ${nombreRandom}`)
                        
//                             } else {
//                                 alert(`Perdu! c'etait ${nombreRandom}`)   
//                             }
//            document.write(Math.round(nombreRandom) + "<br>")
//     }


// random()

//method 2 (correction)
// function devinette(){
//     let nombreArrondi = parseInt(Math.random()*100);
//         //  console.log(nombreArrondi);
//          let essai = 0;
//             for(let i = 1 ; i <= 6 ; i++){ //2
//                 let choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris e,tre 0 et 100, Attention vous avez 6 essais !'));
//                     if(choixUser === nombreArrondi){
//                         document.write("Vous avez gagné, bravo la réponse était bien  <strong> " + nombreArrondi+ '</strong>.' );
//                         break
//                     }else {
//                             if(choixUser < 0 || choixUser > 100 || isNaN(choixUser)){
//                                 alert('Vous devez saisir un nombre compris entre 0 et 100 !' + i  +'/6');
//                                 i--; // ici on décrémente i car l'uilisateur n'a pas rentré une valeur compris entre 0 et 100 -> ça ne compte pas dans les essais ( si je suis sur le 3 ème essai je ne perds ma position )
//                                 essai = 0;
//                                 // console.log(essai);     
//                            }else if(choixUser > nombreArrondi){
//                                    alert('Visez plus bas ! '  + i  +'/6 ');
//                                    essai = 0;
//                                 //    console.log(essai);        
//                            }else{
//                                    alert('Visez plus haut ! '  + i  +'/6 ');
//                                    essai = 0;
//                                    console.log(essai);    
//                            }
//                            essai++
//                     }
//                 //  return essai
//                     console.log(essai); 
                   
//             }// Fin de la boucle
//             if(essai === 1){
//                 document.write("Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était <strong>" + nombreArrondi+ '</strong>.' );     

//             }

//   }
         
// devinette()



// let nombreArrondi = parseInt(Math.random()*100);
// for(let i = 1; i <= 6; i++){
// let choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous avez 6 essais !'));
// if(choixUser === nombreArrondi){
//     document.getElementById('p4').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien ' + nombreArrondi + '.';
//     break; // on casse la boucle pour qu'elle ne fasse pas les 6 tours demandés
// }else if(choixUser < 0 || choixUser > 100){
//     alert('Vous devez saisir un nombre compris entre 0 et 100 ! ' + i +  '/6');
//     i--; // on décrémente i car l'utilisateur n'a pas rentré une valeur comprise entre 0 et 100 // ça ne compte pas dans les essais
// }else if(isNaN(choixUser)){ // isNaN = is Not a Number : on vérifie si dans le prompt la personne a mis quelque chose qui n'est pas un nombre
//     alert('Vous devez saisir un nombre compris entre 0 et 100 ! ' + i +  '/6');
//     i--; // ça ne compte pas dans les essais 
// }else if(choixUser > nombreArrondi){
//     alert('Visez plus bas ! ' + i + '/6');
// }else {
//     alert('Visez plus haut ! ' + i + '/6');
// }
// document.getElementById('p3').innerHTML ='Dommage, vous n\'avez pas toruvé la bonne réponse, c\'était ' + nombreArrondi + '.';
// }


// let section1 = document.querySelector('#first-section > h1');
// console.log(section1);
// section1.innerHTML = "je suis un titre de niveau 1";
// section1.style.color = "white";
// let section1P = document.querySelector('#first-section > p'); 
// section1P.innerText = "je suis un paragraphe";
// section1P.style.color = "white";
// let section1Img = document.querySelector('#first-section > img');
// section1Img.src = "https://images8.alphacoders.com/808/808398.jpg";
// section1Img.style.width = "600px";
// let sectionbtn = document.querySelector('#first-section > button'); 
// sectionbtn.innerHTML = "bouton";
// let section1Premiere = document.querySelector("#first-section");
// section1Premiere.style.display = "Flex"
// section1Premiere.style.justifyContent = "space-around"
// section1Premiere.style.alignItems = "center"
// section1Premiere.style.padding = "15px"
// section1Premiere.style.backgroundColor = 'darkblue';

// function fp1(){
//     alert("L'element est cliquée !");
// }





// let section2 = document.querySelector('#second-section > h2');
// console.log(section2);
// section2.innerText = "je suis un titre de niveau 2";
// let p = document.getElementsByTagName('p');
// console.log(p);
// p[1].innerHTML = "je suis un Paragraphe";
// p[2].innerHTML = "je suis un Paragraphe";
// let section2A = document.querySelector('#second-section > a');
// section2A.innerText = "je suis un lien";
// section2A.style.textDecoration = "none";
// section2A.style.color = "black";
// section2A.href = "https://getwallpapers.com/wallpaper/full/f/1/5/1157474-most-popular-berserk-phone-wallpaper-2000x1250.jpg";
// let section2Seconde = document.querySelector("#second-section");
// section2Seconde.style.display = "Flex"
// section2Seconde.style.justifyContent = "space-around"
// section2Seconde.style.alignItems = "center"
// section2Seconde.style.padding = "150px"
// section2Seconde.style.backgroundColor = 'grey';



// let bodyTest = document.body;

// //creation section 3
// let section3 = document.createElement("section")
// console.log(section3);
// bodyTest.append(section3)
// section3.classList.add("mystyle")

// //selection section 3
// let section3Sel = document.querySelector('.mystyle');
// //creation h2
// let h2Section3 = document.createElement("h2")
// section3Sel.append(h2Section3)
// h2Section3.innerHTML = "je suis un titre de niveau 2";
// //creation p
// let pSection3 = document.createElement("p")
// section3Sel.append(pSection3)
// pSection3.innerHTML = "je suis un paragraphe";
// //creation bouton
// let buttonSection3 = document.createElement("button")
// section3Sel.append(buttonSection3)
// buttonSection3.innerText = "bouton"

// //application flex

// section3Sel.style.display = "flex"
// section3Sel.style.justifyContent = "space-around"
// section3Sel.style.alignItems = "center"
// section3Sel.style.textAlign = "center"
// section3Sel.style.padding = "150px"
// section3Sel.style.backgroundColor = 'turquoise';




