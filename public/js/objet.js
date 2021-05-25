let personne = {
    nom: "Mike",
    lieu: "maison",
    argent: 120,
    mainDroite: [],
    mainGauche: [],
    seDeplacer (lieuArrivee){
        lieuArrivee.personnes.push(this);

        console.log(`${this.nom} est à ${lieuArrivee.nom} `);
    },
    payerArticle (stock){
        for(let i = 0; i< stock.length; i++){
            this.argent -= stock[i].prix;
        }
        console.log(this.argent)
    },
   couper (ingredient, outil){
            ingredient.etat = "couper";
            outil.etat = "couper";
            console.log(`${this.nom} coupe ${ingredient.nom}`);
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
        ingredients : ["oeuf","oignon","sel","poivre","paprika"],
        caisse: 0,  
    };

    class Ingredients{
        constructor(nom, etat, prix){
            this.nom =  nom;
            this.etat = etat;
            this.prix = prix;
        }
    }
    
    let poele ={
        contenu : [],
        cuir(plat){
            this.etat = "cuit";
            setTimeout(function(){ console.log(` ${plat.nom} est bien cuite, bonne app !`); }, 4000);;
        }
    };


    let bol ={
        contenu :[],
        melanger(nomMelange){  
            let newMelange = new Ingredients(nomMelange, "pas cuit", 5)
           console.log("Il melange tout et obtient une omelette pas cuite");
            return newMelange
            
        }
    };


    export{personne, epicerie, outil, maison, poele, bol, Ingredients};