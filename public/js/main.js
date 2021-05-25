import{personne, epicerie, outil, maison, poele, myCuisson, bol} from './objet.js';
import Ingredients from './classes.js';
import Lieu from './classes.js';


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

personne.seDeplacer(epicerie.personnes, maison.personnes);
console.log(epicerie, maison);

personne.prendre();
console.log(personne.mainDroite);

console.log(`${personne.nom} a pris un ${personne.mainDroite.type}`);


