let personne = {
    nom: "Mike",
    lieu: "maison",
    argent: 120,
    mainDroite: "",
    mainGauche: "",
    seDeplacer (lieu){
        return lieu;
    },
    payerArticle (article){
        return article;
    },
    couper: (ingredient, outil) => {
    }
    }   

    let maison ={
        nom: "maison",
        personnes:[],
    }

    let outil ={
        nom: "couteau",
        action: "coupé",
    }

    let epicerie ={
        nom: "KouizineShop",
        personnes: [],
        paniers: [],
        ingredients : [],
        caisse: 0, 
    }

    let poele ={
        contenu : [],
        cuir(){
            this.contenu = "cuit";
        }
    }
    let myCuisson = setTimeout(poele.cuir, 4000);

    let bol ={
        contenu :[],
        melanger(nomMelange){
            
        }
    }

    export{personne, maison, poele, myCuisson, bol}