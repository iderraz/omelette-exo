let personne = {
    nom: "Mike",
    lieu: "maison",
    argent: 120,
    mainDroite: [],
    mainGauche: [],
    seDeplacer (lieuArrivee, lieuDepart){
        lieuArrivee.push(this);
        lieuDepart.splice(0,1);
    },
    payerArticle (){
        for(let i = 0; i<this.mainDroite.length; i++){
            this.argent -= epicerie.ingredients[i].prix;
            epicerie.caisse +=epicerie.ingredient[i].prix;
        }
        console.log(personne.argent)
        console.log(epicerie.caisse);
        bol.contenu.push(epicerie.ingredients)
        this.mainDroite.splice(epicerie.ingredients)
    },
   couper (ingredient, outil){
      for(let i = 0; i < bol.contenu.length; i++){
        if(ingredient.etat == "entier"){
            ingredient.etat = outil.action
       }else if(ingredient.etat == "coquille" ){
           ingredient.etat = "cassé"
       }
      }
   },
   prendre (){
    this.mainDroite.push(epicerie.bacPanier.shift());
 }


    };  

    let maison ={
        nom: "maison",
        personnes:[],
    };

    let outil ={
        nom: "couteau",
        action: "coupé",
    };

    let epicerie ={
        nom: "epicerie",
        personnes: [],
        
        ingredients : [],
        caisse: 0,  
    };
    

    let poele ={
        contenu : [],
        cuir(){
            this.contenu = "cuit";
        }
    };
    let myCuisson = setTimeout(poele.cuir, 4000);

    let bol ={
        contenu :[],
        melanger(nomMelange){   
        }
    };


    export{personne, epicerie, outil, maison, poele, myCuisson, bol};