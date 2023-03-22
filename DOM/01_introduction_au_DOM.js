/*
    * Le DOM signifie "Document Object Model" (c'est à dire "Modèle d'Objet de Document" en français). Le DOM est une interface de programmation qui est une représentation du HTML d'une page web qui permet d'accéder aux éléments de cette page et de les modifier avec du Javascript.

    * Il faut voir le DOM comme un arbre où chaque élément peut avoir zéro ou plusieurs enfants, qui peuvent avoir eux-mêmes zéro ou plusieurs enfants...

    * Dans le DOM, on commence toujours par un élément racine qui est le point de départ du document: la balise <html>.

    * Celle ci a pour enfants les balises <head> et <body> qui ont donc un parent commun => la balise <html>. Vous trouverez ensuite le contenu de votre page dans la balise <body> sous forme de liens, boutons, blocs,etc... 

    * Avec une interface de proggramation nous permettant de parcourir le DOM, nous allons pouvoir INTÉRAGIR avec lui. Ces intéractions comprennent:
    *  -> la modification du contenu d'un élément précis
    *  -> la modification du style d'un élément
    *  -> la création ou la suppression d'éléments
    *  -> l'intéraction avec les utilisateurs (afin de repérer des clics sur un élément ou encore de récupérer leur nom dans un formulaire)
    *  -> etc..
    
    * En résumé:
    * Aujourd'hui les sites Intrnets sont de plus en plus intéractifs et animés. En effet, leur contenu charge et évolue en continu, sans avoir besoin de recharger la page. Cela vous permet d'avoir une navigation fluide et agréable.
    * Eh bien c'est le DOM qui nous permet de faire cela !!!
    * 
    * * L'Objet "document" est le point d'entrée vers mon contenu HTML.
    * Chaque page chargée dans mon navigateur a un objet "document".
    * Ex: document.write(""); me permet d'afficher du contenu en JS dans mon HTML
    */

    /*
    Window est un objet qui correspond à la fenêtre dans laquelle s'affiche une page Web.
    il est le parent de chaque objet qui compose la page web, il contient donc :

        ->  l'objet document: la page en elle-même
        ->  l'objet location: le lieu de stockage de la page
        ->  l'objet history: les pages visitées précédemment
     l'objet frames: les cadres (division de la fenêtre en sous-fenêtres)
    
     */

     console.log(window); //  on retrouve plein de méthode disponible sur l'objet window  
     /* L'objet window possède des méthodes relatives à l'ouverture et à la fermeture des fenêtres.  
         -> Les méthodes alert(), confirm() et prompt()  
     */  
     console.log(window.document.title);  
     
     //l'événemet window.onload permet de lancer la fonction seulement une fois que toute la page est chargée ce qui fait que cette fonction, peu importe où elle est placée dans la page, sera lue seulement lorsque toute la page a été chargée
     // window.onload
 
     /*
     le document :  on retrouve les elements qui composent mon document
     
     */
      console.log(document); 
 
     /*
         Afin de modifier notre page HTML selon les intéractions d'un utilisateur nous allons modifier notre DOM grâce à javascript.
 
         SELECTIONNER NOS ELEMENTS
      */
 
     /*-----------------------------------*\
     | ~ ~ ~ document.getElementById ~ ~ ~ |
     |-------------------------------------|
     |  document.getElementById() est une  |
     |  fonction qui va permettre de       |
     |  récupérer un élément HTML à partir |
     |  de son identifiant unique : son ID |
     \*-----------------------------------*/
 
     /*--------------------------------------------*\
     | ~ ~ ~ document.getElementsByClassName ~ ~ ~  |
     | -------------------------------------------- |
     | document.getElementsByClassName() est une    |
     | fonction qui va permettre de récupérer un    |
     | ou plusieurs éléments (une liste) HTML à     |
     | partir de leur classe.                       |
     \*--------------------------------------------*/
 
     
         // -> Me renvoie un tableau JS avec mes éléments HTML (Collection HTML)
 
     /*-----------------------------------------*\
     | ~ ~ ~ document.getElementsByTagName ~ ~ ~ |
     | ----------------------------------------- |
     | document.getElementsByTagName() est une   |
     | fonction qui va permettre de récupérer un |
     | ou plusieurs éléments (une liste) HTML à  |
     | partir de leur * nom de balise *          |
     \*-----------------------------------------*/
    
          // -> Me renvoie un tableau JS avec mes éléments HTML (Collection HTML)
 
     /*--------------------------------------------*\
     | ~ ~ ~ document.querySelector ~ ~ ~           |
     | -------------------------------------------- |
     | document.querySelector est une               |
     | fonction qui va permettre de récupérer un    |
     | éléments HTML à partir de son sélecteur      |
     | (nom de balise, #id ou .class)               |
     | selectionne un seul élément et le premier    |
     \*--------------------------------------------*/
 
 
     /*--------------------------------------------*\
     | ~ ~ ~ document.querySelectorAll ~ ~ ~        |
     | -------------------------------------------- |
     | document.querySelectorAll est une fonction   |
     | qui recupere un ou plusieurs éléments (une   |
     |   liste) HTML à partir de leur sélecteur     |
     | (nom de balise, #id ou .class)               |
     |  selectionne toute les balise en ensemble    |                                        
     |                                              |
     \*--------------------------------------------*/
 
        // -> Me renvoie un tableau JS avec mes éléments HTML (Collection HTML)
 
 
 
 
 
 
 
 
 
 
 
 
 