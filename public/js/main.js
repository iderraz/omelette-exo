import{personne, epicerie, outil, maison, poele,bol, Ingredients} from './objet.js';



let oeuf = new Ingredients("oeuf", "coquille", 1);
let oignon = new Ingredients("oignon","entier", 1);
let sel = new Ingredients("sel", "moulu", 1);
let poivre = new Ingredients("poivre", "moulu", 1);
let paprika = new Ingredients("paprika","moulu", 1);

console.log(oeuf, oignon, sel, poivre, paprika);

// personne.seDeplacer(maison);


 epicerie.bacPanier = [     
     {type: "panier1", contenu: []},
     {type: "panier2", contenu: []},
     {type: "panier3", contenu: []},
  ];


console.log(personne.nom + " est actuellement à la " + personne.lieu );

personne.seDeplacer(epicerie);



personne.prendre();
console.log(personne.mainDroite);

console.log(`${personne.nom} a pris un panier`);
epicerie.ingredients.forEach(element => 
  personne.mainDroite[0].contenu.push(element)
);
epicerie.ingredients.forEach(element => 
  console.log(`${personne.nom} a pris ${element}`)
);
let stock = [oeuf,oignon,sel,poivre,paprika];

console.log(personne.mainDroite[0].contenu);
personne.payerArticle(stock);

personne.seDeplacer(maison);

stock.forEach(element => 
  bol.contenu.push(element)
);
console.log(bol.contenu);
stock.forEach(element => 
  console.log(`${personne.nom} ajoute ${element.nom} dans le bol `)
);
personne.mainDroite[0].contenu.forEach(element => 
  personne.mainDroite[0].contenu.splice(element)
);
console.log(personne.mainDroite[0].contenu);

personne.seDeplacer(epicerie);

epicerie.bacPanier.push(personne.mainDroite[0]);
personne.mainDroite.pop();
console.log(personne.mainDroite);

personne.seDeplacer(maison);

for (let i = 0; i < bol.contenu.length; i++){
  if(bol.contenu[i].etat == "entier"){
    personne.couper(bol.contenu[i], outil);

  }
}
let omelette = "omelette";
let plat = bol.melanger(omelette);
poele.cuir(plat);





